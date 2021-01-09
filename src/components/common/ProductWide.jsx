import React from 'react'
import { Box, Flex, Image, HStack, Text, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { FaPlayCircle } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { BiCart } from 'react-icons/bi'
import { RiMovieLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { truncate } from '../../util/helpers'

function ProductWide({ item, productType, trailer }) {
  const history = useHistory()

  const handleClick = () => {
    if (productType === 'product.single-item') {
      history.push(`/singles/${item.id}`)
    } else {
      history.push(`/series/${item.id}`)
    }
  }

  return (
    <Wrapper
      onClick={handleClick}
      mr="1rem"
      key={item.id}
      minW="300px"
      h="56.25%"
      pos="relative"
      cursor="pointer"
    >
      <Image
        src={item.widePoster?.url}
        alt={item.title}
        w="100%"
        maxW="300px"
        transition="all .5s"
      />
      {/* <video autoPlay loop id="trailer">
        <source src={trailer} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
      <Box id="overlay" transition="all .1s">
        <Box className="details" pos="absolute" bottom="1.5rem" left="1.5rem">
          <Icon color="#fff" fontSize="4rem" as={FaPlayCircle} />
          <Text color="#fff" fontSize="1.6rem" mt="1rem" fontWeight="500">
            {item.title}
          </Text>
          <Flex align="center">
            {productType === 'product.single-item' ? (
              <>
                <HStack>
                  <Icon color="#fff" as={BiCart} />
                  <Text color="#fff" fontSize="1.2rem">
                    ${item.type[0].buyPrice}
                  </Text>
                </HStack>
              </>
            ) : (
              <HStack>
                <Icon color="#fff" as={RiMovieLine} />
                <Text color="#fff" fontSize="1.2rem">
                  {item.type[0].seasons.length}{' '}
                  {item.type[0].seasons.length > 1 ? 'Seasons' : 'Season'}
                </Text>
              </HStack>
            )}
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
              .
            </Box>
            <HStack>
              <Icon color="#fff" as={BsClockHistory} />
              <Text color="#fff" fontSize="1.2rem">
                {item.type[0].runtime || '45min'}
              </Text>
            </HStack>
          </Flex>
          <Flex align="center">
            {item.genres.map((genre) => (
              <>
                <Text color="#fff" fontSize="1rem">
                  {genre.name}
                </Text>
                <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                  .
                </Box>
              </>
            ))}
          </Flex>
        </Box>
      </Box>
      <Box id="outer-details" mt=".8rem" transition="all .5s">
        <Text color="brand.gray300">{truncate(item.title, 15)}</Text>
        <Text color="brand.gray200">2020</Text>
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
    background: linear-gradient(
      180deg,
      rgba(13, 2, 2, 0) 0%,
      rgba(0, 0, 0, 0.4629026610644257) 54%
    );
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 1;
    z-index: 2;
  }

  @media (min-width: 768px) {
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

      #outer-details {
        opacity: 0;
      }
    }
  }
`
