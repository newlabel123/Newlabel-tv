import { Box, chakra, useMediaQuery } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useRef } from 'react';
import Slider from 'react-slick';

import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';

import { ProductLong } from './ProductLong';

function LongCardSlider({ items }) {
  const sliderRef = useRef();
  const SlderNav = chakra(NextIcon);

  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const nextSlide = () => sliderRef.current.slickNext();
  console.log('slider', items)

  return (
    <Wrapper pos="relative">
      <Slider {...settings} ref={sliderRef}>
        {items?.map((item, i) => (
          <ProductLong
            index={i}
            key={item.id}
            item={item}
            // productType={item.type[0].__component}
          />
        ))}
      </Slider>
      {isLargerThan480 && items && (
        <SlderNav
          pos="absolute"
          top="50%"
          right="0"
          w="8rem"
          cursor="pointer"
          transform="translateY(-50%)"
          onClick={nextSlide}
        />
      )}
    </Wrapper>
  );
}

export { LongCardSlider };

const Wrapper = styled(Box)`
  @media (min-width: 768px) {
    .slick-list {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  &:hover {
    /* .slick-slide {
      transition: all 0.5s;
      transform: translateX(-25%);

      & ~ .slick-slide {
        transform: translateX(25%);
      }
    } */

    /* .slick-slide {
      transform: scale(1.2) !important;
      transform-origin: ${(props) => (props.index === 0 ? 'left' : 'center')};
      z-index: 2;
    } */
  }

  /* .slick-track {
    width: 100% !important;
  } */
`;
