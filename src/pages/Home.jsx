import { Box, Fade } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import {
  Banner,
  ContinueWatching,
  LoadingScreen,
  LongCardSlider,
  WideCardSlider,
} from '../components/common'
import { SectionWrapper } from '../components/layout'
import { getHomeData } from '../queries'

function Home() {
  const { isLoading, error, data } = useQuery('homepage', getHomeData)

  if (isLoading) {
    return <LoadingScreen />
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Fade in={true}>
      <Box>
        <Banner bannerData={data?.banner} />
        {/* <ContinueWatching /> */}
        <Box>
          {data?.sections?.map((item) => (
            <SectionWrapper key={item.id} title={item.name}>
                <LongCardSlider items={item.movies} />
             
            </SectionWrapper>
          ))}
        </Box>
      </Box>
    </Fade>
  )
}

export { Home }
