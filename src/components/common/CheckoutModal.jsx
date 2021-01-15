import { Box, Flex, HStack, Icon, Image, Input, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/auth'
import { Btn } from './Buttons'
import { AiFillCloseSquare } from 'react-icons/ai'
import { ErrorMessage } from './Form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function CheckoutModal({ product, onToggle }) {
  const { authState } = useContext(AuthContext)
  const [coupon, setCoupon] = useState('')
  const { register, handleSubmit, errors } = useForm()

  const history = useHistory()

  const onSubmit = async (coupon) => {
    setCoupon(coupon)
  }

  const handleWalletPayment = async () => {
    const balance = authState.user.walletBalance

    let price = 0
    const productType = product.type[0].__component

    if (productType === 'product.single-item') {
      price = product.type[0].buyPrice
    } else {
      price = product.type[0].seasonPassPrice
    }

    if (price > balance) {
      toast.dark('Insufficient funds')
    } else {
      toast.dark('Purchase successful')
      history.push('/player')
    }
  }

  return (
    <Flex
      position="fixed"
      top="150px"
      left="50%"
      transform="translateX(-50%)"
      bgColor="#fff"
      zIndex="100"
      borderRadius="1rem"
      direction="column"
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
          src={product?.widePoster?.url}
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
              {product.title}
            </Text>
          </Text>
          <Text color="#000" mt={['0rem', '1.5rem']}>
            Price:{' '}
            <Text color="#505565" ml="1rem" as="span">
              ${product.type[0].buyPrice || product.type[0].seasonPassPrice}
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
          >
            Pay with wallet
          </Btn>
          <Btn w="100%" py="2.2rem" fontSize="1.4rem">
            Pay with card
          </Btn>
        </HStack>
      </Box>
    </Flex>
  )
}

export { CheckoutModal }
