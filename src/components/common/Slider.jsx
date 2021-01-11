import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { AiOutlinePlayCircle, AiOutlineHeart } from 'react-icons/ai'

import { truncate } from '../../util/helpers'

import { ReactComponent as NextIcon } from '../../assets/icons/next.svg'
import { Btn } from './Buttons'

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
          <Btn p="2rem 4rem" leftIcon={<AiOutlinePlayCircle />}>
            Watch now
          </Btn>
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

function Banner({ bannerData }) {
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
    <Box pos="relative">
      <Slider ref={sliderRef} settings={settings}>
        {bannerData.slides.map((item) => (
          <Slide item={item} key={item.id} />
        ))}
      </Slider>
      <SlderNav
        pos="absolute"
        top="50%"
        right="0"
        cursor="pointer"
        transform="translateY(-50%)"
        onClick={nextSlide}
      />
    </Box>
  )
}

export { Banner }
