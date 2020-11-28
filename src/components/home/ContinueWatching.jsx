import React from 'react'
import Slider from 'react-slick'
import { Box, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import styled from '@emotion/styled'
import { SectionWrapper } from '../layout'

function ContinueWatching () {
  const items = [1, 2, 3]

  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <SectionWrapper title="Continue Watching">
      <Slider {...settings}>
        {items.map((item, i) => (
          <Resume index={i} key={item} maxW="300px" h="168.75px !important" mr="1.6rem" pos="relative" cursor="pointer">
            <Image src="https://i.insider.com/5eb97ff7cdfd480a6265c298?width=1100&format=jpeg&auto=webp" alt="naruto" w="100%" h="100%" objectFit="cover" filter="grayscale(90%)" transition="all .5s" />
            <Flex pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" bg="rgba(0,0,0,.4)" w="60px" h="60px" borderRadius="50%" justify="center" align="center">
              <Icon color="#f00" as={FaPlay} />
            </Flex>
            <Box pos="absolute" bottom="1.5rem" left="1.5rem">
              <Text color="#fff" fontSize="1.6rem" fontWeight="500">Riverdale</Text>
              <Text transition="all .5s" className="details" color="#fff" opacity="0.4" fontSize="1.4rem" fontWeight>2013 ‧ Drame ‧ 1h 22m</Text>
            </Box>
            <Box bg="#f00" h="0%" pos="absolute" left="0" top="0" w="2px" transition="all .5s" className="left-border" />
            <Box bg="#f00" w="0%" pos="absolute" left="0" bottom="0" h="2px" transition="all .5s .5s" className="bottom-border" />
          </Resume>
        ))}
      </Slider>
    </SectionWrapper>
  )
}

export { ContinueWatching }

const Resume = styled(Box)`
  &:hover {
    .left-border {
      height: 100%;
    }
    
    .bottom-border {
      width: 50%;
    }

    .details {
      opacity: 1;
    }
    
    img {
      filter: grayscale(0%)
    }
  }
`
