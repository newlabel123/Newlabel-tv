import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

function Wrapper ({ children }) {
  return (
    <Box w="100%">
      <Header />
      <Flex w="100%" overflowX="hidden">
        <Sidebar />
        <Box w="100%" maxW="100%" pt="12rem" pl="15rem" pb="10rem">
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

export { Wrapper }
