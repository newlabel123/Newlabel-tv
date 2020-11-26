import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function SectionWrapper ({ title, children, ...otherProps }) {
  return (
    <Box mt="6rem" {...otherProps}>
      <Text color="brand.gray300" fontSize="2.5rem" fontWeight="500" mb="3rem">{title}</Text>
      {children}
    </Box>
  )
}

export { SectionWrapper }
