import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Product } from '../common'

function ProductGrid({ items }) {
  return (
    <>
      <Grid
        templateColumns="repeat(auto-fill, minmax(170px, 1fr))"
        gap="1.6rem"
      >
        {items.map((item, i) => (
          <Product
            index={i}
            key={item.id}
            item={item}
            productType={item.productType[0].__component}
            minW="17rem"
            mr="1.6rem"
          />
        ))}
      </Grid>
    </>
  )
}

export { ProductGrid }
