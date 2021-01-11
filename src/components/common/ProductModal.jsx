import {
  chakra,
  Box,
  Text,
  Flex,
  HStack,
  Icon,
  forwardRef,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion, isValidMotionProp } from 'framer-motion'
import React from 'react'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import { Btn } from './Buttons'

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <chakra.div ref={ref} {...chakraProps} />
  })
)

function ProductModal({ item }) {
  return (
    <MotionBox
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '480px', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      w="99%"
      h="480px"
      mt="-2rem"
      pos="relative"
    >
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
        />
      </Flex>
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pt="3rem"
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
              <Text color="#fff" fontSize="1rem">
                {genre.name}
              </Text>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box>
            </>
          ))}
        </Flex>
        <HStack spacing="3rem" mt="2rem">
          <Btn p="2rem 4rem">Watch now</Btn>
        </HStack>
      </Box>
    </MotionBox>
  )
}

export { ProductModal }

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
