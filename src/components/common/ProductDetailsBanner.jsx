import { Box, Text, Flex, HStack, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import { Btn } from './Buttons'

function ProductDetailsBanner({ item, onToggle }) {
  const history = useHistory()
  const { authState } = useContext(AuthContext)

  const handleClick = () => {
    if (!authState?.jwt) {
      history.push('/login')
      return
    }
    onToggle()
  }

  return (
    <Box w="100%" h="500px" mt="-2rem" pos="relative">
      <Flex h="100%">
        <Left
          pos="relative"
          bgColor="#000"
          w="35%"
          h="100%"
          alignItems="center"
          borderRadius=".5rem 0 0 .5rem"
        />
        <Box
          w="65%"
          h="100%"
          bg={`url(${item.banner.url})`}
          bgSize="cover"
          borderRadius="0 .5rem .5rem 0"
        ></Box>
      </Flex>
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pt="7rem"
        pl="5rem"
        color="#fff"
      >
        <Text fontFamily="ReformaGroteskDemiC" fontSize="7rem" fontWeight="700">
          {item.title}
        </Text>
        <Text maxW="500px">{item.description}</Text>
        <Flex align="center" mt="2rem">
          {item.type[0].__component === 'product.single-item' ? (
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
        <Flex align="center" mt="1.5rem">
          {item.genres.map((genre) => (
            <>
              <Text color="#fff">{genre.name}</Text>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
            </>
          ))}
        </Flex>
        <HStack spacing="3rem" mt="2rem">
          <Btn onClick={handleClick} p="2rem 4rem">
            Watch now
          </Btn>
        </HStack>
      </Box>
    </Box>
  )
}

export { ProductDetailsBanner }

const Left = styled(Flex)`
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`
