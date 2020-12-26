import { Box, Text, Flex, HStack, Icon, Button } from '@chakra-ui/react'
import React from 'react'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'

function Banner({
  title,
  description,
  buyPrice,
  rentPrice,
  runtime,
  bannerImg,
}) {
  return (
    <Box
      w="100%"
      h="500px"
      bg={`linear-gradient(180deg, rgba(13,2,2,0) 0%, rgba(0,0,0,0.6629026610644257) 54%), url(${bannerImg})`}
      backgroundSize="cover"
      pos="relative"
      borderRadius={['0', '0', '1rem']}
    >
      <Box
        pos="absolute"
        left={['2rem', '2rem', '7rem']}
        bottom="7rem"
        zIndex="2"
      >
        <Text fontSize="1.8rem" color="#f00">
          Watch now
        </Text>
        <Text
          fontFamily="ReformaGroteskDemiC"
          fontSize="7rem"
          color="#fff"
          fontWeight="700"
        >
          {title}
        </Text>
        <Text color="#fff" maxW="500px">
          {description}
        </Text>
        <Flex align="center" mt="1.5rem">
          <HStack>
            <Icon color="#fff" as={BiCart} />
            <Text color="#fff" fontSize="1.4rem">
              $35
            </Text>
          </HStack>
          <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
            .
          </Box>
          <HStack>
            <Icon color="#fff" as={BsClockHistory} />
            <Text color="#fff" fontSize="1.4rem">
              {runtime || '50mins'}
            </Text>
          </HStack>
        </Flex>
        <HStack spacing="3rem" mt="2rem">
          <Button
            bg="#f00"
            color="#fff"
            borderRadius="5px"
            p="2rem 4rem"
            leftIcon={BiCart}
          >
            Watch now - $35
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}

export { Banner }
