import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function SectionWrapper ({ title, children, ...otherProps }) {
  return (
    <Box overflowX='hidden' mt={['3rem', '4.5rem', '6rem']} {...otherProps} px={['2rem', '2rem', '0']}>
      <Text color="brand.gray300" fontSize="2.5rem" fontWeight="500" mb="3rem">{title}</Text>
      {children}
    </Box>
  )
}

export { SectionWrapper }
