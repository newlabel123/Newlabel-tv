import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner } from '../components/common'
import { ContinueWatching, Popular, Recommended } from '../components/home'
import { getHomeData } from '../queries'

function Home () {
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
      <Recommended />
      <Popular />
    </Box>
  )
}

export { Home }
