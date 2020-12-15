import React, { useState } from 'react'
import {
  Box,
  Image,
  Text,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { Btn } from '../components/common'

import logomark from '../assets/images/logomark.svg'

function PasswordToggle({ type, setType }) {
  if (type === 'text') {
    return (
      <IconButton
        as={BsEyeSlash}
        fontSize="1.4rem"
        color="brand.gray300"
        onClick={() => setType('password')}
        pos="relative"
        top="1rem"
        right="1rem"
        cursor="pointer"
        _hover={{ background: 'transparent' }}
      />
    )
  }

  return (
    <IconButton
      as={BsEye}
      fontSize="1.4rem"
      color="brand.gray300"
      onClick={() => setType('text')}
      pos="relative"
      top="1rem"
      right="1rem"
      cursor="pointer"
      _hover={{ background: 'transparent' }}
    />
  )
}

function Login() {
  const [type, setType] = useState('password')

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" py="5rem">
      <Box w={['90%', '380px']} mx="auto" textAlign="center">
        <Image src={logomark} w="70px" mx="auto" d="block" />
        <Text fontSize="3.6rem" fontWeight="500" mt="3rem" mb="">
          Login
        </Text>
        <Text color="brand.gray300">Login to continue to newlabel</Text>
        <VStack mt="4rem" spacing="2.4rem">
          <FormControl id="email" isRequired>
            <FormLabel fontWeight="400" fontSize="1.4rem" color="brand.gray300">
              Email
            </FormLabel>
            <Input
              type="email"
              focusBorderColor="brand.gray300"
              py="2.5rem"
              fontSize="1.3rem"
              borderRadius="5px"
              outline="none"
              border="none"
              bg="#F0F1F3"
              placeholder="Email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel fontWeight="400" fontSize="1.4rem" color="brand.gray300">
              Password
            </FormLabel>
            <InputGroup>
              <Input
                type={type}
                focusBorderColor="brand.gray300"
                py="2.5rem"
                fontSize="1.3rem"
                borderRadius="5px"
                outline="none"
                border="none"
                bg="#F0F1F3"
                placeholder="Password"
              />
              <InputRightElement>
                <PasswordToggle type={type} setType={setType} />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Btn
            type="submit"
            w="100%"
            border="none"
            color="#fff"
            bg="#E50914"
            py="2.5rem"
            fontSize="1.4rem"
            fontWeight="400"
          >
            Sign up
          </Btn>
          <Text color="brand.gray300">
            Don&apos;t have an account?{' '}
            <Text to="/signup" as={Link} color="#E50914">
              Signup
            </Text>
          </Text>
          <Text color="brand.gray300">
            By signing up you agree to all NewlabelTv{' '}
            <Text as="span" color="#E50914">
              Terms and Conditions
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  )
}

export { Login, PasswordToggle }
