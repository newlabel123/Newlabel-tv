import { Box, Fade, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Trailer, Similar, CheckoutModal } from '../components/common'
import { Banner } from '../components/single'
import { getProductDetails } from '../queries'

function SingleItemDetails() {
  const { id } = useParams()
  const { isOpen, onToggle } = useDisclosure()

  const { data, isLoading } = useQuery(
    ['getProductDetails', id],
    getProductDetails
  )

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <Box>
      <Banner
        title={data.title}
        description={data.description}
        buyPrice={data.type[0].buyPrice}
        rentPrice={data.type[0].rentPrice}
        runtime={data.type[0].runtime}
        bannerImg={data.banner.url}
        onToggle={onToggle}
      />
      <Trailer />
      <Similar related={data.related} />
      <Fade in={isOpen}>
        <CheckoutModal product={data} />
      </Fade>
    </Box>
  )
}

export { SingleItemDetails }
