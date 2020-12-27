import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'

import profileIcon from '../assets/icons/Profile.svg'
import emailIcon from '../assets/icons/Email.svg'
import locationIcon from '../assets/icons/Location.svg'
import walletIcon from '../assets/icons/Wallet.svg'
import { SectionWrapper } from '../components/layout'
import { ProductGrid } from '../components/common'
import styled from '@emotion/styled'
import { AuthContext } from '../context/auth'

function Profile() {
  const { authState } = useContext(AuthContext)
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
              <Text>$3000</Text>
              <Text
                cursor="pointer"
                color="brand.gray300"
                fontWeight="bold"
                _hover={{ color: '#f00' }}
              >
                Top up
              </Text>
            </Box>
          </HStack>
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
