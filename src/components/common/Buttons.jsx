import React from 'react'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

function Btn({ children, isLoading, ...otherProps }) {
  return (
    <CustomBtn
      isLoading={isLoading}
      color="#fff"
      fontWeight="400"
      bg="brand.green"
      fontSize={['1.1rem', '1.3rem']}
      p={['1rem', '1.8rem']}
      border="1px solid #1BB954"
      outline="none"
      _hover={{
        color: '#1BB954',
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
    background: #1bb954;
    border: 1px solid #1bb954;
    color: #fff;
  }
`
