import { Box, Skeleton, Button } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner } from '../components/common'
import { Popular } from '../components/home'
import { getHomeData } from '../queries'
import { AiOutlinePlus } from 'react-icons/ai'

function Movies () {
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
      <Popular />
      <Box mt="8rem" textAlign="center">
        <Button mx="auto" fontSize="1.4rem" leftIcon={<AiOutlinePlus />} p="2rem 2.8rem" bg="#f00" opacity=".6" color="#fff" borderRadius="5px">Load More</Button>
      </Box>
    </Box>
  )
}

export { Movies }
