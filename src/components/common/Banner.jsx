import {
  Box,
  chakra,
  Flex,
  HStack,
  Icon,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import React, { useRef, useContext } from 'react'
import Slider from 'react-slick'
import commafy from 'commafy'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { BsClockHistory } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'

import { Btn } from '../common'

import { truncate } from '../../util/helpers'

import { ReactComponent as NextIcon } from '../../assets/icons/next.svg'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { LocationContext } from '../../context/location'

function Slide({ item }) {
  const { country } = useContext(LocationContext)
  const history = useHistory()

  const handleClick = () => {
    if (item.product.type[0].__component === 'product.single-item') {
      history.push(`/singles/${item.product.id}`)
    } else {
      history.push(`/series/${item.product.id}`)
    }
  }

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
          bg={`url(${item.product.banner.url})`}
          bgSize="cover"
          borderRadius="0 .5rem .5rem 0"
        />
      </Flex>
      <Flex
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pl="5rem"
        color="#fff"
        align="center"
      >
        <Box>
          <Text
            fontFamily="ReformaGroteskDemiC"
            fontSize="7rem"
            fontWeight="700"
          >
            {item.product.title}
          </Text>
          <Text maxW="500px">{truncate(item.product.description, 250)}</Text>
          <Flex align="center" mt="2rem">
            {item.product.type[0].__component === 'product.single-item' ? (
              <>
                <HStack>
                  <Icon color="#fff" as={BiCart} />
                  <Text color="#fff" fontSize="1.2rem">
                    {country === 'Nigeria' ? '₦' : '$'}
                    {country === 'Nigeria'
                      ? commafy(item.product.type[0].buyPrice * 470)
                      : item.product.type[0].buyPrice}
                  </Text>
                </HStack>
              </>
            ) : (
              <HStack>
                <Icon color="#fff" as={RiMovieLine} />
                <Text color="#fff" fontSize="1.2rem">
                  {item.product.type[0].seasons.length}{' '}
                  {item.product.type[0].seasons.length > 1
                    ? 'Seasons'
                    : 'Season'}
                </Text>
              </HStack>
            )}
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
              .
            </Box>
            <HStack>
              <Icon color="#fff" as={BsClockHistory} />
              <Text color="#fff" fontSize="1.2rem">
                {item.product.type[0].runtime || '45min'}
              </Text>
            </HStack>
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
              .
            </Box>
            <Text color="#fff" fontSize="1.2rem">
              {item.product.year}
            </Text>
          </Flex>
          <HStack spacing="3rem" mt="2rem">
            <Btn
              onClick={handleClick}
              p="2rem"
              fontSize="1.2rem"
              leftIcon={<AiOutlinePlayCircle />}
            >
              Watch now
            </Btn>
            {/* <IconButton
              borderColor="#fff"
              variant="outline"
              color="#fff"
              aria-label="Send email"
              p="2rem 1rem"
              icon={<AiOutlineHeart fontSize="2rem" />}
            /> */}
          </HStack>
        </Box>
      </Flex>
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
        <Box pos="relative" mb="6rem">
          <Slider ref={sliderRef} settings={settings}>
            {bannerData.slides.map((item) => (
              <Slide item={item} key={item.id} />
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
        <>
          {/* {pathname === '/' && (
            <Box pt="1.5rem" px="1rem">
              <Text fontSize="2.5rem" fontWeight="500" mb="3rem">
                Welcome to Newlabel TV
              </Text>
            </Box>
          )} */}
        </>
      )}
    </>
  )
}

export { Banner }
