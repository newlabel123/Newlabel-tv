import { Box, Skeleton, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, Btn, ProductGrid } from '../components/common'
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
      <HStack spacing="2.5rem" my="2.5rem">
        <Btn bg="#f00" borderColor="#f00" color="#fff">Features</Btn>
        <Btn>Comedy</Btn>
        <Btn>Action</Btn>
        <Btn>Adventure</Btn>
        <Btn>Biography</Btn>
        <Btn>Documentary</Btn>
        <Btn>Tech</Btn>
      </HStack>
      <Box mt="6rem">
        <ProductGrid />
      </Box>
      <Box mt="8rem" textAlign="center">
        <Button mx="auto" fontSize="1.4rem" leftIcon={<AiOutlinePlus />} p="2rem 2.8rem" bg="#f00" opacity=".6" color="#fff" borderRadius="5px">Load More</Button>
      </Box>
    </Box>
  )
}

export { Movies }
