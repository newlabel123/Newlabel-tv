import {
  Flex,
  HStack,
  Avatar,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useMediaQuery,
  Box,
  Text,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Search } from '../../assets/icons/Search.svg'
import { ReactComponent as Caret } from '../../assets/icons/Arrow Down.svg'

import logo from '../../assets/images/logo-green.svg'
import { Btn, ThemeSwitch } from '../common'
import { AuthContext, LOGOUT } from '../../context/auth'

function Header() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return <>{isLargerThan768 ? <DesktopHeader /> : <MobileHeader />}</>
}

export { Header }

function DesktopHeader() {
  const { authState, dispatch } = useContext(AuthContext)
  const { colorMode } = useColorMode()

  const logout = () => {
    dispatch({ type: LOGOUT, payload: '' })
    window.location.replace('/')
  }

  return (
    <Flex
      transition="background .5s"
      justify="space-between"
      align="center"
      w="100%"
      h={['70px', '120px']}
      px={['2rem', '4rem']}
      position="fixed"
      left="0"
      top="0"
      zIndex="500"
      bg={colorMode === 'light' ? 'brand.white' : '#14142B'}
    >
      <HStack spacing="6rem">
        <Link to="/">
          <Image src={logo} w={['150px', '200px', 'auto']} />
        </Link>
        <HStack
          w="40rem"
          align="center"
          px="2rem"
          border="1px solid #A1A4B1"
          borderRadius="4rem"
        >
          <Search />
          <Input
            fontSize="1.4rem"
            color="brand.gray100"
            type="phone"
            placeholder="Search"
            border="none"
            focusBorderColor="rgba(0,0,0,0)"
            py="2.5rem"
          />
        </HStack>
      </HStack>
      <HStack spacing="2rem">
        <ThemeSwitch />
        {authState?.jwt ? (
          <Menu>
            <MenuButton as={Box}>
              <HStack cursor="pointer">
                <Avatar
                  bg="brand.green"
                  color="#fff"
                  size="lg"
                  name={authState.user.name}
                  cursor="pointer"
                />
                <Caret />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Btn py="1.8rem" fontSize="1.2rem" as={Link} to="/login">
            Login
          </Btn>
        )}
      </HStack>
    </Flex>
  )
}

function MobileHeader() {
  const { authState, dispatch } = useContext(AuthContext)
  const { colorMode } = useColorMode()

  const logout = () => {
    dispatch({ type: LOGOUT, payload: '' })
    window.location.replace('/')
  }

  return (
    <Flex
      transition="background .5s"
      justify="space-between"
      align="center"
      w="100%"
      h="90px"
      px="2rem"
      position="fixed"
      left="0"
      top="0"
      zIndex="500"
      bg={colorMode === 'light' ? 'brand.white' : '#000'}
    >
      <HStack spacing="6rem">
        <Link to="/">
          <Image src={logo} w={['150px', '200px', 'auto']} />
        </Link>
      </HStack>
      <Menu>
        <MenuButton as={Box}>
          <HStack cursor="pointer">
            <Avatar
              bg="brand.green"
              color="#fff"
              size="lg"
              name={authState?.user?.name}
              cursor="pointer"
            />
            <Caret />
          </HStack>
        </MenuButton>
        {authState?.jwt ? (
          <MenuList>
            <MenuItem as={Link} to="/profile">
              <Text fontSize="1.7rem" py=".5rem">
                Profile
              </Text>
            </MenuItem>
            <MenuItem onClick={logout}>
              <Text fontSize="1.7rem" py=".5rem">
                Logout
              </Text>
            </MenuItem>
            <MenuItem py=".5rem">
              <ThemeSwitch />
            </MenuItem>
          </MenuList>
        ) : (
          <MenuList>
            <MenuItem py=".5rem">
              <ThemeSwitch />
            </MenuItem>
          </MenuList>
        )}
      </Menu>
    </Flex>
  )
}
