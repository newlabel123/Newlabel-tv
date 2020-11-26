import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

import profileIcon from '../assets/icons/Profile.svg'
import emailIcon from '../assets/icons/Email.svg'
import locationIcon from '../assets/icons/Location.svg'
import walletIcon from '../assets/icons/Wallet.svg'
import { SectionWrapper } from '../components/layout'
import { ProductGrid } from '../components/common'

function Profile () {
  return (
    <Flex>
      <Box w="250px" mx="5rem">
        <Flex justify="center" align="center" h="235px" w="235px" bg="#f00" opacity=".6" borderRadius="5px">
          <Text fontSize="10rem" color="#fff" fontWeight="300">AE</Text>
        </Flex>
        <Box mx="auto">
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={profileIcon} />
            <Text>Aneri Emmax</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image maxW="2rem" src={emailIcon} />
            <Text>aneriemmax@gmail.com</Text>
          </HStack>
          <HStack mt="2.5rem" minW="130px" spacing="1.1rem">
            <Image src={locationIcon} />
            <Text>Lagos, Nigeria</Text>
          </HStack>
          <HStack spacing="5rem" mt="4.5rem" align="flex-start">
            <HStack minW="130px" spacing="1.1rem">
              <Image src={walletIcon} />
              <Text>Wallet Balance</Text>
            </HStack>
            <Box>
              <Text>$3000</Text>
              <Text cursor="pointer" color="brand.gray300" fontWeight="bold" _hover={{ color: '#f00' }}>Top up</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box>
        <SectionWrapper title="Your Feed" mt="0">
          <ProductGrid />
        </SectionWrapper>
      </Box>
    </Flex>
  )
}

export { Profile }
