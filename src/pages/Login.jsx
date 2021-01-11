import React, { useContext, useState } from 'react'
import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  useColorMode,
} from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

import { Btn, CustomInput, ErrorMessage } from '../components/common'

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
      bg="transparent"
      _hover={{ background: 'transparent' }}
    />
  )
}

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('password')
  const { dispatch } = useContext(AuthContext)
  const history = useHistory()
  const { colorMode } = useColorMode()

  const { register, handleSubmit, errors } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const res = await login(data)

      dispatch({ type: LOGIN, payload: res })
      setIsLoading(true)

      history.push('/')

      toast({
        title: 'Logged in successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      setIsLoading(false)
      console.log({ error })
    }
  }

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" py="5rem">
      <Box w={['90%', '380px']} mx="auto" textAlign="center">
        <Image src={logomark} w="70px" mx="auto" d="block" />
        <Text fontSize="3.6rem" fontWeight="500" mt="3rem" mb="">
          Login
        </Text>
        <Text color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}>
          Login to continue to newlabel
        </Text>
        <VStack
          mt="4rem"
          spacing="2.4rem"
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box w="100%" align="left">
            <Text
              as="label"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
              htmlFor="email"
            >
              Email
            </Text>
            <CustomInput
              type="email"
              placeholder="Email"
              id="email"
              name="identifier"
              register={register}
            />
            <ErrorMessage message={errors?.identifier?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
              htmlFor="email"
            >
              Password
            </Text>
            <InputGroup>
              <CustomInput
                type={type}
                placeholder="Password"
                id="password"
                name="password"
                register={register}
              />
              <InputRightElement mt=".5rem">
                <PasswordToggle type={type} setType={setType} />
              </InputRightElement>
            </InputGroup>
            <ErrorMessage message={errors?.password?.message} />
          </Box>
          <Btn type="submit" w="100%" isLoading={isLoading}>
            Login
          </Btn>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
            Don&apos;t have an account?{' '}
            <Text to="/signup" as={Link} color="#E50914">
              Signup
            </Text>
          </Text>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
            Not ready to login?{' '}
            <Text to="/" as={Link} color="brand.red">
              Return Home
            </Text>
          </Text>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
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
