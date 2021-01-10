import { Box, Skeleton, Button } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, LongCardSlider } from '../components/common'
// import { Recommended } from '../components/home'
import { getProducts } from '../queries'
import { AiOutlinePlus } from 'react-icons/ai'
import { SectionWrapper } from '../components/layout'

function Series() {
  const { isLoading, error, data } = useQuery(
    ['series', 'series', '5fe1e4695425ba931d2c3936'],
    getProducts
  )

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Box>
      <Skeleton height="500px" isLoaded={!isLoading}>
        <Banner bannerData={data.banner} />
      </Skeleton>
      {/* <Recommended /> */}
      <SectionWrapper>
        <LongCardSlider items={data.items} />
      </SectionWrapper>
      <Box mt="8rem" textAlign="center">
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
      </Box>
    </Box>
  )
}

export { Series }
