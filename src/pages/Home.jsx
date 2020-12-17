import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, ProductGrid, ProductSlider } from '../components/common'
import { ContinueWatching } from '../components/home'
import { SectionWrapper } from '../components/layout'
import { getHomeData } from '../queries'

function Home() {
  const { isLoading, error, data } = useQuery('homepage', getHomeData)

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Box>
      <Skeleton height="500px" isLoaded={!isLoading}>
        {data && <Banner bannerData={data.banner} />}
      </Skeleton>
      <ContinueWatching />
      {data?.sections.map((item) => (
        <SectionWrapper key={item.id} title={item.title}>
          {item.layoutType === 'SLIDER' ? (
            <ProductSlider items={item.products} cardType={item.cardType} />
          ) : (
            <ProductGrid />
          )}
        </SectionWrapper>
      ))}
    </Box>
  )
}

export { Home }
