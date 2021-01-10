import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { LongCardSlider, WideCardSlider } from '../components/common'
import { Banner } from '../components/home'
import { SectionWrapper } from '../components/layout'
import { getHomeData } from '../queries'

function Home() {
  const { isLoading, error, data } = useQuery('homepage', getHomeData)

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Box>
      <Banner bannerData={data.banner} />
      <Box>
        {data.sections.map((item) => (
          <SectionWrapper key={item.id} title={item.title}>
            {item.cardType === 'long' ? (
              <LongCardSlider items={item.products} />
            ) : (
              <WideCardSlider items={item.products} />
            )}
          </SectionWrapper>
        ))}
      </Box>
    </Box>
  )
}

export { Home }
