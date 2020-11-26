import React from 'react'
import { Box, Flex, Image, HStack, Text, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { FaPlayCircle } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { BiCart } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

function ProductWide ({ item, trailer }) {
  const history = useHistory()

  const handleClick = () => {
    history.push('/series/1')
  }

  return (
    <Wrapper onClick={handleClick} mr="1rem" key={item.name} minW="300px" h="56.25%" pos="relative" cursor="pointer">
      <Image src={item.image} alt="naruto" w="100%" maxW="300px" transition="all .5s" />
      <video autoPlay loop id="trailer">
        <source src={trailer} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <Box id="overlay" transition="all .5s .4s">
        <Box className="details" pos="absolute" bottom="1.5rem" left="1.5rem">
          <Icon color="#fff" fontSize="4rem" as={FaPlayCircle} />
          <Text color="#fff" fontSize="1.6rem" mt="1rem" fontWeight="500">{item.name}</Text>
          <Flex align="center">
            <HStack>
              <Icon color="#fff" as={BiCart} />
              <Text color="#fff" fontSize="1.2rem">$35</Text>
            </HStack>
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">.</Box>
            <HStack>
              <Icon color="#fff" as={BsClockHistory} />
              <Text color="#fff" fontSize="1.2rem">2hrs 10mins</Text>
            </HStack>
          </Flex>
          <Flex align="center">
            <Text color="#fff" fontSize="1.2rem">Action</Text>
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">.</Box>
            <Text color="#fff" fontSize="1.2rem">Drama</Text>
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">.</Box>
            <Text color="#fff" fontSize="1.2rem">Mystery</Text>
          </Flex>
        </Box>
      </Box>
    </Wrapper>
  )
}

export { ProductWide }

const Wrapper = styled(Box)`
  #trailer {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    display: none;
  }

  #overlay {
    background: linear-gradient(180deg, rgba(13,2,2,0) 0%, rgba(0,0,0,0.4629026610644257) 54%);
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    opacity: 0;
    z-index: 2;
  }

  &:hover {
    width: 400px !important;

    img {
      max-width: 400px !important;
    }

    #trailer {
      display: block;
    }

    #overlay {
      opacity: 1;
    }
  }
`
