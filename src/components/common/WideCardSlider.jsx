import { Box, chakra, useMediaQuery } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import React, { useState, useRef } from 'react'
import Slider from 'react-slick'

import { ReactComponent as NextIcon } from '../../assets/icons/next.svg'

import { ProductModal } from './ProductModal'
import { ProductWide } from './ProductWide'

function WideCardSlider({ items }) {
  const [currentItem, setCurrentItem] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

  const sliderRef = useRef()
  const SlderNav = chakra(NextIcon)

  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  const nextSlide = () => sliderRef.current.slickNext()

  return (
    <Wrapper pos="relative">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, i) => (
          <ProductWide
            index={i}
            key={item.id}
            item={item}
            itemType={item.itemtype}
            setShowModal={setShowModal}
            showModal={showModal}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
          />
        ))}
      </Slider>
      <AnimatePresence>
        {showModal && <ProductModal item={currentItem} />}
      </AnimatePresence>
      {isLargerThan480 && (
        <SlderNav
          pos="absolute"
          top="120px"
          right="0"
          w="8rem"
          cursor="pointer"
          transform="translateY(-50%)"
          onClick={nextSlide}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  @media (min-width: 768px) {
    .slick-list {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  /* .slick-track {
    width: 100% !important;
  } */
`

export { WideCardSlider }
