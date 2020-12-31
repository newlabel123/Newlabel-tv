import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  SlideFade,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'

import profileIcon from '../assets/icons/Profile.svg'
import emailIcon from '../assets/icons/Email.svg'
import locationIcon from '../assets/icons/Location.svg'
import walletIcon from '../assets/icons/Wallet.svg'
import { SectionWrapper } from '../components/layout'
import {
  Btn,
  ErrorMessage,
  PaymentHandler,
  ProductGrid,
} from '../components/common'
import { AuthContext } from '../context/auth'
import { createTopup } from '../queries'
import { useHistory } from 'react-router-dom'

function Profile() {
  const { authState } = useContext(AuthContext)
  const { isOpen, onToggle } = useDisclosure()
  const [processPayment, setProcessPayment] = useState({
    value: false,
    amount: 0,
  })

  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  const onSubmit = async ({ amount }) => {
    setProcessPayment({ value: true, amount })
  }

  const sendResponse = async (txId) => {
    await createTopup(authState.jwt, authState.user.id, txId)

    history.go(0)
  }

  return (
    <PageWrapper>
      <ProfileInfo
        w={['250px', 'auto']}
        mt="1rem"
        mx="2rem"
        mb="5rem"
        mr="10rem"
      >
        <Flex
          justify="center"
          align="center"
          h="235px"
          w="235px"
          bg="#f00"
          opacity=".6"
          borderRadius="5px"
        >
          <Text fontSize="10rem" color="#fff" fontWeight="300">
            {authState.user.name.charAt(0)}
            {authState.user.name.split(' ')[1].charAt(0)}
          </Text>
        </Flex>
        <DetailsBox mx="auto">
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={profileIcon} />
            <Text>{authState.user.name}</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image maxW="2rem" src={emailIcon} />
            <Text>{authState.user.email}</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={locationIcon} />
            <Text>{authState.user.location || 'No location'}</Text>
          </HStack>
          <HStack spacing="5rem" mt="4.5rem" align="flex-start">
            <HStack minW="130px" spacing="1.1rem">
              <Image src={walletIcon} />
              <Text>Wallet Balance</Text>
            </HStack>
            <Box>
              <Text>${authState.user.walletBalance}</Text>
              <Text
                cursor="pointer"
                color="brand.gray300"
                fontWeight="bold"
                _hover={{ color: '#f00' }}
                onClick={onToggle}
              >
                Top up
              </Text>
            </Box>
          </HStack>
          <SlideFade in={isOpen} offsetY="20px">
            <HStack
              align="flex-start"
              mt="1rem"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box>
                <Input
                  type="number"
                  focusBorderColor="brand.gray300"
                  py="2.2rem"
                  fontSize="1.3rem"
                  borderRadius="5px"
                  outline="none"
                  border="none"
                  bg="#F0F1F3"
                  placeholder="Amount"
                  name="amount"
                  ref={register({
                    required: 'Amount is required',
                    min: { value: 10, message: 'Cannot topup below 10' },
                  })}
                />
                <ErrorMessage message={errors?.amount?.message} />
              </Box>
              <Btn type="submit">Fund</Btn>
            </HStack>
          </SlideFade>
          {processPayment.value && (
            <PaymentHandler
              amount={processPayment.amount}
              title="Wallet Topup"
              onSuccess={sendResponse}
              setProcessPayment={setProcessPayment}
            />
          )}
        </DetailsBox>
      </ProfileInfo>
      <SectionWrapper title="Your Feed" mt="0" w="100%">
        {/* <ProductGrid /> */}
      </SectionWrapper>
    </PageWrapper>
  )
}

export { Profile }

const ProfileInfo = styled(Flex)`
  @media (max-width: 550px) {
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 900px) {
    flex-direction: column;
  }
`

const DetailsBox = styled(Box)`
  @media (min-width: 900px) {
    margin: 0;
  }
`

const PageWrapper = styled(Flex)`
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`
