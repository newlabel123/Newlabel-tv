import React from 'react'
import { Box, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { truncate } from '../../util/helpers'

function ProductLong({ index, item, productType, ...rest }) {
  const history = useHistory()

  const handleClick = () => {
    if (productType === 'product.single-item') {
      history.push(`/singles/${item.id}`)
    } else {
      history.push(`/series/${item.id}`)
    }
  }

  return (
    <CardBox
      w="17rem"
      h="25rem"
      mr="1rem"
      position="relative"
      onClick={handleClick}
      cursor="pointer"
      transition="all .5s"
      index={index}
    >
      <Image
        src={item.poster?.url}
        alt="naruto"
        objectFit="cover"
        w="100%"
        h="100%"
        transition="all .5s"
        borderRadius="5px"
      />
      <Box id="overlay" transition="all .5s .4s">
        <Box className="details" pos="absolute" bottom="1.5rem" left="1.5rem">
          <Text color="#fff" fontSize="1.2rem" mt="1rem" fontWeight="500">
            {truncate(item?.title, 25)}
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
    </CardBox>
  )
}

export { ProductLong }

const CardBox = styled(Box)`
  /* z-index: -1; */

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
    border-radius: 5px;
    z-index: 1;
  }

  @media (min-width: 768px) {
    &:hover {
      transform: ${(props) =>
        props.index === 0 ? 'scale(1) !important' : 'scale(1.2) !important'};
      z-index: 2;

      #overlay {
        opacity: 1;
      }
    }
  }
`
