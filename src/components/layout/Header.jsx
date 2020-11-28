import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

function Header () {
  return (
    <Flex align="center" w="100%" h={['70px', '120px']} pl={['2rem', '4.5rem']} pr="10.7rem" position="fixed" left="0" top="0" zIndex="500" bg="brand.white">
      <Box>
        <Link to="/">
        <Image src={logo} w={['150px', '200px', 'auto']} /></Link>
      </Box>
    </Flex>
  )
}

export { Header }
