import React from 'react'
import { useColorMode, Input, Text } from '@chakra-ui/react'

function CustomInput({ type, name, register, validations, id, ...rest }) {
  const { colorMode } = useColorMode()

  return (
    <Input
      type={type || 'text'}
      focusBorderColor="brand.gray300"
      py="2.5rem"
      mt=".5rem"
      fontSize="1.3rem"
      borderRadius="5px"
      outline="none"
      border="none"
      bg={colorMode === 'light' ? 'brand.gray500' : 'brand.gray400'}
      name={name}
      ref={register({ required: `${id} is required`, ...validations })}
      {...rest}
    />
  )
}

function ErrorMessage({ message }) {
  return (
    <Text
      textTransform="capitalize"
      fontWeight="400"
      fontSize="1.2rem"
      color="#E50914"
    >
      {message}
    </Text>
  )
}

export { CustomInput, ErrorMessage }
