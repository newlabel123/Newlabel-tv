import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

import logo from '../../assets/images/logo.svg'

function Header () {
  return (
    <Flex align="center" w="100%" h="100px" pl="1.5rem" pr="10.7rem" position="fixed" left="0" top="0" zIndex="500" bg="brand.white">
      <Box>
        <Image src={logo} />
      </Box>
    </Flex>
  )
}

export { Header }
