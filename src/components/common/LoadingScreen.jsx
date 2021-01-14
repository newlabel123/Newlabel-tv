import { Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

function LoadingScreen() {
  return (
    <Wrapper
      justify="center"
      align="center"
      w="100%"
      h="100%"
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
    >
      <Box id="circle3" />
    </Wrapper>
  )
}

export { LoadingScreen }

const Wrapper = styled(Flex)`
  #circle3 {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    width: 50px;
    margin: -25px 0 0 -25px;
    border: 4px rgba(0, 0, 0, 0.25) solid;
    border-top: 4px black solid;
    border-right: 4px black solid;
    border-bottom: 4px black solid;
    border-radius: 50%;
    -webkit-animation: spin3 1s infinite linear;
    animation: spin3 1s infinite linear;
  }

  @-webkit-keyframes spin3 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes spin3 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`
