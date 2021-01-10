import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { AiOutlinePlayCircle, AiOutlineHeart } from 'react-icons/ai'

import { truncate } from '../../util/helpers'

import { ReactComponent as NextIcon } from '../../assets/icons/next.svg'
import styled from '@emotion/styled'

function Slide({ item }) {
  return (
    <Flex
      pos="relative"
      align="center"
      h="500px"
      w="100%"
      p={['2rem', '4rem', null]}
      backgroundImage={`url(${item.product.banner.url})`}
      bgSize="cover"
    >
      <Box
        pos="absolute"
        zIndex="1"
        top="0"
        left="0"
        w="100%"
        h="100%"
        background="linear-gradient(190deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 29%, rgba(0,0,0,0.562062324929972) 59%)"
      />
      <Box pos="relative" zIndex="2">
        <Text fontSize={['1.5rem', '1.5', '1.8rem']} color="#f00">
          {item.introText}
        </Text>
        <Text
          fontFamily="ReformaGroteskDemiC"
          fontSize={['4rem', '6rem', '7rem']}
          color="#fff"
          fontWeight="700"
        >
          {item.title}
        </Text>
        <Text color="#fff" maxW="500px">
          {truncate(item.product.description, 200)}
        </Text>
        <HStack spacing="3rem" mt="2rem">
          <Button
            bg="#f00"
            color="#fff"
            borderRadius="5px"
            p="2rem 4rem"
            leftIcon={<AiOutlinePlayCircle />}
          >
            Watch now - $35
          </Button>
          <IconButton
            borderColor="#fff"
            variant="outline"
            color="#fff"
            aria-label="Send email"
            p="2rem 1rem"
            icon={<AiOutlineHeart fontSize="2rem" />}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

function Slide2({ item }) {
  return (
    <Box w="100%" h="500px" pos="relative">
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
          bg="url(https://wallpapercave.com/wp/wp5152770.jpg)"
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
        pt="5rem"
        pl="5rem"
        color="#fff"
      >
        <Text fontFamily="ReformaGroteskDemiC" fontSize="7rem" fontWeight="700">
          Name
        </Text>
        <Text maxW="500px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          qui ipsam porro quisquam sint consequuntur, odio commodi voluptates
          velit voluptas tenetur neque ratione quae vitae impedit adipisci ullam
          obcaecati nostrum?
        </Text>
        <Flex align="center" mt="1.5rem">
          <HStack>
            <Icon color="#fff" />
            <Text fontSize="1.4rem">$35</Text>
          </HStack>
          <Box color="inherit" fontWeight="800" fontSize="1.2rem" mx=".5rem">
            .
          </Box>
          <HStack>
            <Icon color="#fff" />
            <Text color="inherit" fontSize="1.4rem">
              2hrs 10mins
            </Text>
          </HStack>
        </Flex>
        <HStack spacing="3rem" mt="2rem">
          <Button bg="#f00" color="#fff" borderRadius="5px" p="2rem 4rem">
            Watch now - $35
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}

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

function Banner({ bannerData }) {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const sliderRef = useRef()

  const SlderNav = chakra(NextIcon)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const nextSlide = () => sliderRef.current.slickNext()

  return (
    <>
      {isLargerThan480 ? (
        <Box pos="relative" ml="3rem">
          <Slider ref={sliderRef} settings={settings}>
            {bannerData.slides.map((item) => (
              <Slide2 item={item} key={item.id} />
            ))}
          </Slider>
          <SlderNav
            pos="absolute"
            top="50%"
            right="0"
            w="8rem"
            cursor="pointer"
            transform="translateY(-50%)"
            onClick={nextSlide}
          />
        </Box>
      ) : (
        <Box pt="1.5rem" px="1rem">
          <Text
            color="brand.gray400"
            fontSize="3rem"
            fontWeight="500"
            mb="3rem"
          >
            Welcome to Newlabel TV
          </Text>
        </Box>
      )}
    </>
  )
}

export { Banner }
