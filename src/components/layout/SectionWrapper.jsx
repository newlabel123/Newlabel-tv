import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function SectionWrapper({ title, children, ...otherProps }) {
  return (
    <Box
      mt={['3rem', '4.5rem', '6rem']}
      px={['.8rem', '2rem', '0']}
      {...otherProps}
    >
      {title && (
        <Text
          color="brand.gray300"
          fontSize={['2rem', '2rem', '2.5rem']}
          fontWeight="500"
          mb="0"
          ml={['0', ' 0', '3rem']}
        >
          {title}
        </Text>
      )}
      {children}
    </Box>
  )
}

export { SectionWrapper }
