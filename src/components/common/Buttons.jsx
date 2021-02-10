import React from 'react'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

function Btn({ children, isLoading, ...otherProps }) {
  return (
    <CustomBtn
      isLoading={isLoading}
      color="#fff"
      fontWeight="400"
      bg="brand.red"
      fontSize={['1.1rem', '1.3rem']}
      p={['1rem', '1.8rem']}
      border="1px solid #E50914"
      outline="none"
      _hover={{
        color: '#E50914',
        background: 'transparent',
      }}
      {...otherProps}
    >
      {children}
    </CustomBtn>
  )
}

export { Btn }

const CustomBtn = styled(Button)`
  &.active {
    background: #e50914;
    border: 1px solid #e50914;
    color: #fff;
  }
`
