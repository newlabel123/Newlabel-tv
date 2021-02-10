import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { Sidebar } from './Sidebar'

function Wrapper({ children }) {
  const [isBelow768px] = useMediaQuery('(max-width: 768px)')
  const { pathname } = useLocation()

  if (pathname === '/signup' || pathname === '/login') {
    return <Box w="100%">{children}</Box>
  }

  if (pathname === '/player') {
    return (
      <Box w="100%" h="100vh" overflow="hidden" bg="#000">
        {children}
      </Box>
    )
  }

  return (
    <Box w="100%">
      <Header />
      <Flex w="100%" overflowX="hidden" pb={isBelow768px ? '10rem' : '0'}>
        <Sidebar />
        <Box
          w="100%"
          h="100vh"
          maxW="100%"
          pt={['70px', '120px']}
          pl={isBelow768px ? '0' : '12rem'}
          overflowX="hidden"
        >
          {children}
        </Box>
      </Flex>
      <MobileNav />
    </Box>
  )
}

export { Wrapper }
