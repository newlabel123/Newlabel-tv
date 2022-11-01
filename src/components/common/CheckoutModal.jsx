import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { FlutterWaveButton } from 'flutterwave-react-v3'
import { v4 as uuidv4 } from 'uuid'

import { AuthContext } from '../../context/auth'
import { Btn } from './Buttons'
import { AiFillCloseSquare } from 'react-icons/ai'
import { ErrorMessage } from './Form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createOrder } from '../../queries'
import { closePaymentModal } from '../../util/helpers'
import commafy from 'commafy'
import { LocationContext } from '../../context/location'

function CheckoutModal({ item, onToggle }) {
  const { country } = useContext(LocationContext)
  const { authState } = useContext(AuthContext)
  const [coupon, setCoupon] = useState('')
  const { register, handleSubmit, errors } = useForm()
  const [isWalletLoading, setIsWalletLoading] = useState(false)
  const [currentSeason, setCurrentSeason] = useState(1)

  let price = 0
  const productType = item.itemType

  if (productType === 'Movie') {
    price = item.price
  } else {
    price = item.seasonPassPrice
  }

  const history = useHistory()

  const onSubmit = async (coupon) => {
    setCoupon(coupon)
  }

  const handleWalletPayment = async () => {
    setIsWalletLoading(true)
    const balance = authState.user.walletBalance

    if (price > balance) {
      toast.dark('Insufficient funds')
    } else {
      try {
        if (productType === 'Movie') {
          await createOrder(
            authState.jwt,
            authState.user.id,
            item.id,
            price,
            item.donation,
            'wallet'
          )
        } else {
          await createOrder(
            authState.jwt,
            authState.user.id,
            item.id,
            price,
            item.donation,
            'wallet',
            null,
            currentSeason
          )
        }
        toast.dark('Purchase successful')
        setIsWalletLoading(true)
        history.push('/player')
      } catch (error) {
        setIsWalletLoading(false)
        toast.dark(error.response?.data?.message || 'Purchase failed')
      }
    }
  }

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUB_KEY,
    tx_ref: uuidv4(),
    amount: country === 'Nigeria' ? price * 470 : price,
    currency: country === 'Nigeria' ? 'NGN' : 'USD',
    country: 'NG',
    payment_options: 'card',
    customer: {
      email: authState.user.email,
      phonenumber: authState.user.phone || '',
      name: authState.user.name,
    },
    customizations: {
      title: item.name,
      description: 'Payment for items in cart',
      logo:
        'https://res.cloudinary.com/new-label/image/upload/v1609092832/newlabel_brand_icon_mark_qay8i6.png',
    },
  }

  const fwConfig = {
    ...config,
    text: 'Pay with card',
    callback: (response) => {
      console.log('PAYMENT COMPLETE........')
      closePaymentModal()
      history.push('/player')
    },
    onClose: () => {},
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      position="fixed"
      zIndex="100"
      top="0"
      left="0"
      background="rgba(255, 255, 255, .6)"
      style={{ backdropFilter: 'blur(2px)' }}
      justify="center"
      align="center"
    >
      <Flex
        position="relative"
        bgColor="#fff"
        borderRadius="1rem"
        direction="column"
        maxW="355px"
      >
        <Box pos="absolute" top="1.5rem" right="1.5rem" zIndex="5">
          <Icon
            as={AiFillCloseSquare}
            color="#000"
            fontSize="3.5rem"
            cursor="pointer"
            onClick={() => onToggle()}
          />
        </Box>
        <Box w="100%" h="200px">
          <Image
            borderRadius="1rem"
            w="100%"
            h="100%"
            objectFit="cover"
            src={item?.poster}
          />
        </Box>
        <Box w="350px" p="2.5rem" color="#000">
          <Text fontSize="2.4rem" fontWeight="500">
            Order Summary
          </Text>
          <Box
            my="1.5rem"
            w="100%"
            bgColor="rgba(255, 27, 27, .0)"
            borderRadius="1rem"
          >
            <Text color="#000">
              Title:{' '}
              <Text color="#505565" ml="1rem" as="span">
                {item.name}
              </Text>
            </Text>
            {productType === 'product.series' && (
              <Select
                value={currentSeason}
                onChange={(e) => setCurrentSeason(e.target.value)}
                placeholder="Select Season"
                size="lg"
                h="4rem"
                mt="1rem"
                fontSize="1.3rem"
                focusBorderColor="rgba(0,0,0,.5)"
              >
                {item.seasons.map((season) => (
                  <option key={season.id} value={season.seasonNumber}>
                    Season {season.seasonNumber}
                  </option>
                ))}
              </Select>
            )}
            <Text color="#000" mt={['0rem', '1.5rem']}>
              Price:{' '}
              <Text color="#505565" ml="1rem" as="span">
                {country === 'Nigeria' ? '₦' : '$'}
                {country === 'Nigeria'
                  ? (item.price &&
                      commafy(item.price * 470)) ||
                    item.seasons[currentSeason - 1].seasonPassPrice
                  : item.price ||
                    item.seasons[currentSeason - 1].seasonPassPrice}
              </Text>
            </Text>
          </Box>
          <HStack
            display="none"
            align="flex-start"
            mt="1rem"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            mb="3.5rem"
            w="100%"
            spacing="2rem"
          >
            <Box flex="1">
              <Input
                type="number"
                focusBorderColor="brand.gray300"
                py="2.2rem"
                fontSize="1.3rem"
                borderRadius="5px"
                outline="none"
                border="none"
                bg="#F0F1F3"
                placeholder="Enter coupon"
                name="amount"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                ref={register({
                  required: 'Amount is required',
                  min: { value: 10, message: 'Cannot topup below 10' },
                })}
              />
              <ErrorMessage message={errors?.amount?.message} />
            </Box>
            <Btn
              border="1px solid #200E32"
              bg="#200E32"
              color="#fff"
              w="12rem"
              type="submit"
            >
              Apply Coupon
            </Btn>
          </HStack>
          <HStack>
            <Btn
              w="100%"
              py="2.2rem"
              fontSize="1.4rem"
              onClick={handleWalletPayment}
              isLoading={isWalletLoading}
            >
              Pay with wallet
            </Btn>
            <Btn w="100%" py="2.2rem" fontSize="1.4rem">
              <FlutterWaveButton {...fwConfig} />
            </Btn>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}

export { CheckoutModal }
