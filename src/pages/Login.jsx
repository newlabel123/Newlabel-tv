import React, { useContext, useState } from 'react'
import {
  Box,
  Image,
  Text,
  Input,
  VStack,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

import { Btn, ErrorMessage } from '../components/common'

import logomark from '../assets/images/logomark.svg'
import { login } from '../queries'
import { AuthContext, LOGIN } from '../context/auth'

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
  const { dispatch } = useContext(AuthContext)
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    const res = await login(data)

    dispatch({ type: LOGIN, payload: res })

    history.push('/')

    toast({
      title: 'Logged in successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" py="5rem">
      <Box w={['90%', '380px']} mx="auto" textAlign="center">
        <Image src={logomark} w="70px" mx="auto" d="block" />
        <Text fontSize="3.6rem" fontWeight="500" mt="3rem" mb="">
          Login
        </Text>
        <Text color="brand.gray300">Login to continue to newlabel</Text>
        <VStack
          mt="4rem"
          spacing="2.4rem"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box w="100%" align="left">
            <Text
              as="label"
              fontWeight="400"
              fontSize="1.4rem"
              color="brand.gray300"
              htmlFor="email"
            >
              Email
            </Text>
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
              id="email"
              name="identifier"
              ref={register({ required: 'Email is required' })}
            />
            <ErrorMessage message={errors?.identifier?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              fontWeight="400"
              fontSize="1.4rem"
              color="brand.gray300"
            >
              Password
            </Text>
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
                id="password"
                name="password"
                ref={register({ required: 'Password is required' })}
              />
              <InputRightElement>
                <PasswordToggle type={type} setType={setType} />
              </InputRightElement>
            </InputGroup>
            <ErrorMessage message={errors?.password?.message} />
          </Box>
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
