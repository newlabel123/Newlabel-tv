import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  InputRightElement,
  InputGroup,
  useColorMode,
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Btn, CustomInput, ErrorMessage } from '../components/common';

import logomark from '../assets/images/logomark.svg';
import { PasswordToggle } from './Login';
import { signup } from '../queries';
// import { AuthContext } from '../context/auth';

function Signup() {
  const [type, setType] = useState('password');
  const [dobValidation, setdobValidation] = useState(null);
  // const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();
    const minYYYY = yyyy - 18;

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    const maxDate = `${yyyy}-${mm}-${dd}`;
    const minDate = `${minYYYY}-01-01`;

    setdobValidation({ maxDate, minDate });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await signup(data);
      if (res) {
        // dispatch({ type: 'LOGIN', payload: res });
        setIsLoading(false);
        toast.dark('Signup successful');
        history.push('/login');
      }
      setIsLoading(false);
    } catch (error) {
      toast.dark(error.message || 'Signup failed');
      setIsLoading(false);
      console.log(error);
      throw new Error('Signup failed');
    }
  };

  return (
    <Flex w="100%" minH="100vh" justify="center" align="center" py="5rem">
      <Box w={['90%', '380px']} mx="auto" textAlign="center">
        <Image src={logomark} w="70px" mx="auto" d="block" />
        <Text fontSize="3.6rem" fontWeight="500" mt="3rem" mb="">
          Sign Up
        </Text>
        <Text color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}>
          Sign up to contnue watching on newlabel
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
              htmlFor="firstname"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
            >
              First Name
            </Text>
            <CustomInput
              placeholder="First Name"
              name="firstname"
              id="firstname"
              register={register}
            />
            <ErrorMessage message={errors?.firstname?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="lastname"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
            >
              Last Name
            </Text>
            <CustomInput
              placeholder="Name"
              name="lastname"
              id="lastname"
              register={register}
            />
            <ErrorMessage message={errors?.lastname?.message} />
          </Box>
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="email"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
            >
              Email
            </Text>
            <CustomInput
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              register={register}
            />
            <ErrorMessage message={errors?.email?.message} />
          </Box>
          {/* <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="dob"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
            >
              Date of birth
            </Text>
            <CustomInput
              type="date"
              placeholder="dd/mm/yyyy"
              name="dob"
              id="dob"
              register={register}
              validations={{
                required: 'DOB is required',
                max: {
                  value: dobValidation?.minDate,
                  message: 'You need to be at least 18 to signup',
                },
              }}
            />
            <ErrorMessage message={errors?.dob?.message} />
          </Box> */}
          <Box w="100%" align="left">
            <Text
              as="label"
              htmlFor="password"
              fontWeight="400"
              fontSize="1.4rem"
              color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
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
            Sign up
          </Btn>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
            Already got an account?{' '}
            <Text to="/login" as={Link} color="brand.green">
              Login
            </Text>
          </Text>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
            Not ready to signup?{' '}
            <Text to="/" as={Link} color="brand.green">
              Return Home
            </Text>
          </Text>
          <Text
            color={colorMode === 'light' ? 'brand.gray300' : 'brand.gray200'}
          >
            By signing up you agree to all NewlabelTv{' '}
            <Text as="span" color="brand.green">
              Terms and Conditions
            </Text>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export { Signup };
