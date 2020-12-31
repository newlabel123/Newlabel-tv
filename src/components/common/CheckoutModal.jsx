import { Box, Flex, HStack, Image, Input, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/auth'
import { truncate } from '../../util/helpers'
import { Btn } from './Buttons'
import { ErrorMessage } from './Form'

function CheckoutModal({ product }) {
  const { authState } = useContext(AuthContext)
  const [coupon, setCoupon] = useState('')
  const { register, handleSubmit, errors } = useForm()
  // const history = useHistory()

  const onSubmit = async (coupon) => {
    setCoupon(coupon)
  }

  const checkWallet = async () => {
    const balance = authState.user.walletBalance
    let price = 0
    const productType = product.type[0].__component

    if (productType === 'product.single-item') {
      price = product.type[0].buyPrice
    }

    if (price > balance) {
      alert('Insufficient funds')
    } else {
      alert('purchase successful')
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
    >
      <Box w="305px">
        <Image w="100%" h="100%" objectFit="cover" src={product?.poster?.url} />
      </Box>
      <Box w="550px" p="2.5rem">
        <Text fontSize="2.4rem" fontWeight="500">
          Order Summary
        </Text>
        <Box
          my="2.5rem"
          w="100%"
          bgColor="rgba(255, 27, 27, .2)"
          p="2rem"
          borderRadius="1rem"
        >
          <Text color="#000">
            Title:{' '}
            <Text color="#505565" ml="1rem" as="span">
              {product.title}
            </Text>
          </Text>
          <Text color="#000" mt="1.5rem">
            Price:{' '}
            <Text color="#505565" ml="1rem" as="span">
              {product.buyPrice}
            </Text>
          </Text>
          <Text color="#000" mt="1.5rem">
            Duration:{' '}
            <Text color="#505565" ml="1rem" as="span">
              {product.duration}
            </Text>
          </Text>
          <Text color="#000" mt="1.5rem">
            Description:{' '}
            <Text color="#505565" ml="1rem" as="span">
              {truncate(product.description, 100)}
            </Text>
          </Text>
        </Box>
        <HStack
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
            border="none"
            color="#fff"
            bg="#E50914"
            py="2.5rem"
            fontSize="1.4rem"
            fontWeight="400"
            onClick={checkWallet}
          >
            Pay with wallet
          </Btn>
          <Btn
            w="100%"
            border="none"
            color="#fff"
            bg="#E50914"
            py="2.5rem"
            fontSize="1.4rem"
            fontWeight="400"
          >
            Pay with card
          </Btn>
        </HStack>
      </Box>
    </Flex>
  )
}

export { CheckoutModal }
