import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

function CustomInput () {
  return (
    <FormControl id="first-name" isRequired>
      <FormLabel fontSize="1.4rem" color="brand.gray300">First name</FormLabel>
      <Input borderRadius="5px" outline="none" border="none" bg="#F0F1F3" placeholder="First name" />
    </FormControl>
  )
}

export { CustomInput }
