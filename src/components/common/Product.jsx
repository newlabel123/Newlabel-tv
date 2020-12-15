import React from 'react'
import { Box, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { truncate } from '../../util/helpers'

function Product({ item, ...rest }) {
  const history = useHistory()

  const handleClick = () => {
    history.push('/movies/1')
  }

  return (
    <Box {...rest} pt="145.25%" position="relative" onClick={handleClick}>
      <CardBox
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        cursor="pointer"
        transition="all .5s"
      >
        <Image
          src={item.poster?.url}
          alt="naruto"
          objectFit="cover"
          w="100%"
          minH="100%"
          transition="all .5s"
          borderRadius="5px"
        />
        <Box id="overlay" transition="all .5s .4s">
          <Box className="details" pos="absolute" bottom="1.5rem" left="1.5rem">
            <Text color="#fff" fontSize="1.2rem" mt="1rem" fontWeight="500">
              {truncate(item?.title, 15)}
            </Text>
            <Flex align="center">
              <HStack>
                <Icon color="#fff" as={BiCart} />
                <Text color="#fff" fontSize="1.2rem">
                  $35
                </Text>
              </HStack>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
              <HStack>
                <Icon color="#fff" as={BsClockHistory} />
                <Text color="#fff" fontSize="1.2rem">
                  2hrs 10mins
                </Text>
              </HStack>
            </Flex>
            <Flex align="center">
              <Text color="#fff" fontSize="1rem">
                Action
              </Text>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
              <Text color="#fff" fontSize="1rem">
                Drama
              </Text>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
              <Text color="#fff" fontSize="1rem">
                Mystery
              </Text>
            </Flex>
          </Box>
        </Box>
      </CardBox>
      <Box id="outer-details" mt=".8rem" transition="all .5s">
        <Text color="brand.gray300">{truncate(item.title, 15)}</Text>
        <Text color="brand.gray200">2020</Text>
      </Box>
    </Box>
  )
}

export { Product }

const CardBox = styled(Box)`
  #overlay {
    background: linear-gradient(
      180deg,
      rgba(13, 2, 2, 0) 0%,
      rgba(0, 0, 0, 0.6629026610644257) 54%
    );
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    z-index: 2;
  }

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.4);
      z-index: 200;

      #overlay {
        opacity: 1;
      }

      #outer-details {
        opacity: 0;
      }
    }
  }
`
