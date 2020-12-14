import { Flex, HStack, Avatar, Image, Input, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Search } from '../../assets/icons/Search.svg'
import { ReactComponent as Caret } from '../../assets/icons/Arrow Down.svg'

import logo from '../../assets/images/logo.svg'
import { ThemeSwitch } from '../common'

function Header () {
  const { colorMode } = useColorMode()

  return (
    <Flex transition="background .5s" justify="space-between" align="center" w="100%" h={['70px', '120px']} px={['2rem', '4.5rem']} position="fixed" left="0" top="0" zIndex="500" bg={colorMode === 'light' ? 'brand.white' : '#000'}>
      <HStack spacing="6rem">
        <Link to="/">
          <Image src={logo} w={['150px', '200px', 'auto']} />
        </Link>
        <HStack w="40rem" align="center" px="2rem" border="1px solid #A1A4B1" borderRadius="4rem">
          <Search />
          <Input fontSize="1.4rem" color="brand.gray100" type="phone" placeholder="Search" border="none" focusBorderColor="rgba(0,0,0,0)" py="2.5rem" />
        </HStack>
      </HStack>
      <HStack spacing="2rem">
        <ThemeSwitch />
        <HStack>
          <Avatar bg="brand.red" color="#fff" size="lg" name="Aneri Emmax" />
          <Caret />
        </HStack>
      </HStack>
    </Flex>
  )
}

export { Header }
