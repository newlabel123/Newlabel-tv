import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, ProductGrid, ProductSlider } from '../components/common'
import { ContinueWatching, StackedBanner } from '../components/home'
import { SectionWrapper } from '../components/layout'
import { getHomeData } from '../queries'

function Home() {
  const { isLoading, error, data } = useQuery('homepage', getHomeData)

  if (error) {
    console.log({ error })
  }

  return (
    <Box>
      <StackedBanner />
      <Skeleton height="500px" isLoaded={!isLoading}>
        {data && <Banner bannerData={data.banner} />}
      </Skeleton>
      <ContinueWatching />
      {data?.sections.map((item) => (
        <SectionWrapper key={item.id} title={item.title}>
          {item.layoutType === 'slider' ? (
            <ProductSlider items={item.products} cardType={item.cardType} />
          ) : (
            <ProductGrid items={item.products} cardType={item.cardType} />
          )}
        </SectionWrapper>
      ))}
    </Box>
  )
}

export { Home }
