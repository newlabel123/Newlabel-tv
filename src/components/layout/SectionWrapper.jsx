import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function SectionWrapper({ title, children, ...otherProps }) {
  return (
    <Box
      mt={['3rem', '3rem', '2rem']}
      px={['2rem', '2rem', '0']}
      {...otherProps}
    >
      {title && (
        <Text
          fontSize={['2rem', '2rem', '2.5rem']}
          fontWeight="500"
          mb={['.5rem', '.5rem', '0']}
        >
          {title}
        </Text>
      )}
      {children}
    </Box>
  )
}

export { SectionWrapper }
