import React from 'react'
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react'

function CustomInput() {
  return (
    <FormControl id="first-name" isRequired>
      <FormLabel fontSize="1.4rem" color="brand.gray300">
        First name
      </FormLabel>
      <Input
        borderRadius="5px"
        outline="none"
        border="none"
        bg="#F0F1F3"
        placeholder="First name"
      />
    </FormControl>
  )
}

function ErrorMessage({ message }) {
  return (
    <Text fontWeight="400" fontSize="1.2rem" color="#E50914">
      {message}
    </Text>
  )
}

export { CustomInput, ErrorMessage }
