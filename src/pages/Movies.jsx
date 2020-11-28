import { Box, Skeleton, Button } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, Btn, ProductGrid } from '../components/common'
import { getHomeData } from '../queries'
import { AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import { SectionWrapper } from '../components/layout'

function Movies () {
  const { isLoading, error, data } = useQuery('homepage', getHomeData)

  const categories = ['Comedy', 'Action', 'Adventure', 'Biography', 'Documentary', 'Tech']

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log({ error })
  }

  const settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <Box>
      <Skeleton height="500px" isLoaded={!isLoading}>
        {data && <Banner bannerData={data.banner} />}
      </Skeleton>
      <SectionWrapper mt={['0', '0', '6rem']}>
        <Slider {...settings}>
          {categories.map((category, i) => (
            <Box index={i} key={i} mr="1rem">
              <Btn className={i === 0 && 'active'} mr="1rem" index={6}>{category}</Btn>
            </Box>
          ))}
        </Slider>
      </SectionWrapper>
      <SectionWrapper mt="6rem">
        <ProductGrid />
      </SectionWrapper>
      <SectionWrapper mt={['0', '0', '6rem']} textAlign="center">
        <Button mx="auto" fontSize="1.4rem" leftIcon={<AiOutlinePlus />} p="2rem 2.8rem" bg="#f00" opacity=".6" color="#fff" borderRadius="5px">Load More</Button>
      </SectionWrapper>
    </Box>
  )
}

export { Movies }
