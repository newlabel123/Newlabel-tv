import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'

import { FlutterWaveButton } from 'flutterwave-react-v3'
import { v4 as uuidv4 } from 'uuid'

import profileIcon from '../assets/icons/Profile.svg'
import emailIcon from '../assets/icons/Email.svg'
import locationIcon from '../assets/icons/Location.svg'
import walletIcon from '../assets/icons/Wallet.svg'
import { SectionWrapper } from '../components/layout'

import { AuthContext, UPDATE } from '../context/auth'
import { createTopup } from '../queries'
import { closePaymentModal } from '../util/helpers'
import { LoadingScreen } from '../components/common'

function Profile() {
  const { authState, dispatch } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  async function saveTransaction(txId) {
    setIsLoading(true)
    const res = await createTopup(authState.jwt, authState.user.id, txId)

    dispatch({ type: UPDATE, payload: res.user })
  }

  console.log(authState)

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUB_KEY,
    tx_ref: uuidv4(),
    amount: 0,
    currency: 'USD',
    country: 'NG',
    payment_options: 'card',
    customer: {
      email: authState.user.email,
      phonenumber: authState.user.phone || '',
      name: authState.user.name,
    },
    customizations: {
      title: 'Wallet Topup',
      description: 'Payment for items in cart',
      logo:
        'https://res.cloudinary.com/new-label/image/upload/v1609092832/newlabel_brand_icon_mark_qay8i6.png',
    },
  }

  const fwConfig = {
    ...config,
    text: 'Topup',
    callback: (response) => {
      console.log(response)
      closePaymentModal()
      setIsLoading(true)
      // saveTransaction(response.transaction_id)
    },
    onClose: () => {},
  }

  if (isLoading) {
    return <LoadingScreen />
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
              >
                <FlutterWaveButton {...fwConfig} />
              </Text>
            </Box>
          </HStack>
        </DetailsBox>
      </ProfileInfo>
      <Box>
        <SectionWrapper title="Your Feed" mt="0" w="100%">
          {/* <ProductGrid /> */}
        </SectionWrapper>
        <SectionWrapper title="Liked Items" mt="0" w="100%">
          {/* <ProductGrid /> */}
        </SectionWrapper>
      </Box>
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
