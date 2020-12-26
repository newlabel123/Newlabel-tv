import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Trailer, Similar } from '../components/common'
import { Banner } from '../components/single'
import { getProductDetails } from '../queries'

function SingleItemDetails() {
  const { id } = useParams()

  const { data, isLoading } = useQuery(
    ['getProductDetails', id],
    getProductDetails
  )

  if (isLoading) {
    return <p>Loading</p>
  }

  console.log(data)

  return (
    <Box>
      <Banner
        title={data.title}
        description={data.description}
        buyPrice={data.type[0].buyPrice}
        rentPrice={data.type[0].rentPrice}
        runtime={data.type[0].runtime}
        bannerImg={data.banner.url}
      />
      <Trailer />
      <Similar related={data.related} />
    </Box>
  )
}

export { SingleItemDetails }
