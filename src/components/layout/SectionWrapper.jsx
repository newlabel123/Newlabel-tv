import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function SectionWrapper({ title, children, ...otherProps }) {
  return (
    <Box
      overflow="hidden"
      mt={['3rem', '4.5rem', '6rem']}
      px={['2rem', '2rem', '0']}
      {...otherProps}
    >
      {title && (
        <Text
          color="brand.gray300"
          fontSize="2.5rem"
          fontWeight="500"
          mb="3rem"
        >
          {title}
        </Text>
      )}
      {children}
    </Box>
  )
}

export { SectionWrapper }
