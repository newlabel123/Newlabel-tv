import {
  Box,
  Image,
  Text,
  Input,
  VStack,
  Flex,
  InputRightElement,
  InputGroup,
  useToast,
} from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Btn, ErrorMessage } from '../components/common'

import logomark from '../assets/images/logomark.svg'
import { PasswordToggle } from './Login'
import { signup } from '../queries'
import { AuthContext, LOGIN } from '../context/auth'

function Signup() {
  const [type, setType] = useState('password')
  const [dobValidation, setdobValidation] = useState(null)
  const { dispatch } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    const today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 // January is 0!
    const yyyy = today.getFullYear()
    const minYYYY = yyyy - 18

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    const maxDate = `${yyyy}-${mm}-${dd}`
    const minDate = `${minYYYY}-01-01`

    setdobValidation({ maxDate, minDate })
  }, [])

  const { register, handleSubmit, errors } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    const res = await signup({ ...data, username: data.name.split(' ')[0] })

    dispatch({ type: LOGIN, payload: res })

    history.push('/')

    toast({
      title: 'Account created.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

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
        <VStack
          mt="4rem"
          spacing="2.4rem"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="name"
              fontWeight="400"
              fontSize="1.4rem"
              color="brand.gray300"
            >
              Full Name
            </Text>
            <Input
              focusBorderColor="brand.gray300"
              py="2.5rem"
              fontSize="1.3rem"
              borderRadius="5px"
              outline="none"
              border="none"
              bg="#F0F1F3"
              placeholder="Name"
              name="name"
              id="name"
              ref={register({ required: 'Name is required' })}
            />
            <ErrorMessage message={errors?.name?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="email"
              fontWeight="400"
              fontSize="1.4rem"
              color="brand.gray300"
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
              name="email"
              id="email"
              ref={register({ required: 'Email is required' })}
            />
            <ErrorMessage message={errors?.email?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="dob"
              fontWeight="400"
              fontSize="1.4rem"
              color="brand.gray300"
            >
              Date of birth
            </Text>
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
              name="dob"
              id="dob"
              ref={register({
                required: 'DOB is required',
                max: {
                  value: dobValidation?.minDate,
                  message: 'You need to be at least 18 to signup',
                },
              })}
            />
            <ErrorMessage message={errors?.dob?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="password"
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
                name="password"
                id="password"
                ref={register({ required: 'Password is required' })}
              />
              <InputRightElement>
                <PasswordToggle type={type} setType={setType} />
              </InputRightElement>
            </InputGroup>
            <ErrorMessage message={errors?.password?.message} />
          </Box>
          <Input
            as={Btn}
            type="submit"
            w="100%"
            border="none"
            color="#fff"
            bg="#E50914"
            py="2.5rem"
            fontSize="1.4rem"
            fontWeight="400"
            _hover={{
              border: '1px solid #f00',
              color: '#f00',
              background: '#fff',
            }}
          >
            Sign up
          </Input>
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

export { Signup }
