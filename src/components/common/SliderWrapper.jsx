import { HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

function SliderWrapper({ children }) {
  return (
    <Wrapper
      pl={['0rem', '0rem', '3rem']}
      py={['1rem', '1rem', '2.5rem']}
      spacing="1rem"
      pos="relative"
      overflowX="scroll"
    >
      {children}
    </Wrapper>
  )
}

export { SliderWrapper }

const Wrapper = styled(HStack)`
  &::-webkit-scrollbar {
    display: none;
  }

  &:hover .item {
    transform: translateX(-10%);
  }
`
