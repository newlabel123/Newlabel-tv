import { Box, Skeleton, Button } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, Btn, ProductGrid } from '../components/common'
import { getProducts } from '../queries'
import { AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import { SectionWrapper } from '../components/layout'

function Singles() {
  const { isLoading, error, data } = useQuery(
    ['singles', 'single', '5fe208025a886c9408f8b1cf'],
    getProducts
  )

  if (error) {
    console.log({ error })
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <Box>
      <Skeleton height="500px" isLoaded={!isLoading}>
        <Banner bannerData={data.banner} />
      </Skeleton>
      <SectionWrapper mt={['0', '0', '6rem']}>
        <Slider {...settings}>
          {data.categories.map((category, i) => (
            <Box key={category.id} index={i} mr="1rem">
              <Btn className={i === 0 && 'active'} mr="1rem" index={6}>
                {category.name}
              </Btn>
            </Box>
          ))}
        </Slider>
      </SectionWrapper>
      <SectionWrapper mt="6rem" overflow="visible">
        <ProductGrid items={data.items} />
      </SectionWrapper>
      {data.items.length > 20 && (
        <SectionWrapper mt={['0', '0', '6rem']} textAlign="center">
          <Button
            mx="auto"
            fontSize="1.4rem"
            leftIcon={<AiOutlinePlus />}
            p="2rem 2.8rem"
            bg="#f00"
            opacity=".6"
            color="#fff"
            borderRadius="5px"
          >
            Load More
          </Button>
        </SectionWrapper>
      )}
    </Box>
  )
}

export { Singles }
