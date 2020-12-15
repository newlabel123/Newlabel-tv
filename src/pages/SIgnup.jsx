import {
  Box,
  Image,
  Text,
  FormLabel,
  FormControl,
  Input,
  VStack,
  Flex,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Btn } from '../components/common'

import logomark from '../assets/images/logomark.svg'
import { PasswordToggle } from './Login'

function SIgnup() {
  const [type, setType] = useState('password')

  return (
    <Flex w="100%" minH="100vh" justify="center" align="center" py="5rem">
      <Box w={['90%', '380px']} mx="auto" textAlign="center">
        <Image src={logomark} w="70px" mx="auto" d="block" />
        <Text fontSize="3.6rem" fontWeight="500" mt="3rem" mb="">
          Sign Up
        </Text>
        <Text color="brand.gray300">
          Sign up to contnue watching on newlabel
        </Text>
        <VStack mt="4rem" spacing="2.4rem">
          <FormControl id="name" isRequired>
            <FormLabel fontWeight="400" fontSize="1.4rem" color="brand.gray300">
              Name
            </FormLabel>
            <Input
              focusBorderColor="brand.gray300"
              py="2.5rem"
              fontSize="1.3rem"
              borderRadius="5px"
              outline="none"
              border="none"
              bg="#F0F1F3"
              placeholder="Name"
            />
          </FormControl>
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
          <FormControl id="dob" isRequired>
            <FormLabel fontWeight="400" fontSize="1.4rem" color="brand.gray300">
              Date of birth
            </FormLabel>
            <Input
              type="date"
              focusBorderColor="brand.gray300"
              py="2.5rem"
              fontSize="1.3rem"
              borderRadius="5px"
              outline="none"
              border="none"
              bg="#F0F1F3"
              placeholder="dd/mm/yyyy"
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
            Already got an account?{' '}
            <Text to="/login" as={Link} color="#E50914">
              Login
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

export { SIgnup }
