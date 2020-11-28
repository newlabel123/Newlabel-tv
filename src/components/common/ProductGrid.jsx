import React from 'react'
import { Grid } from '@chakra-ui/react'
import { Product } from '../common'

import avengers from '../../assets/images/samples/avengers.jpg'
import babysitter from '../../assets/images/samples/babysitter.jpg'
import bigfoot from '../../assets/images/samples/bigfoot.jpg'
import deadpool from '../../assets/images/samples/deadpool.jpg'
import toystory from '../../assets/images/samples/toystory.jpg'
import wonderwoman from '../../assets/images/samples/wonderwoman.jpg'

function ProductGrid (props) {
  const items = [
    {
      name: 'Avengers - Endgame',
      image: avengers
    },
    {
      name: 'Babysitter',
      image: babysitter
    },
    {
      name: 'The man who killed Hitler',
      image: bigfoot
    },
    {
      name: 'Deadpool',
      image: deadpool
    },
    {
      name: 'Toystory',
      image: toystory
    },
    {
      name: 'Wonder Woman',
      image: wonderwoman
    }
  ]

  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(170px, 1fr))" gap="1.6rem">
        {items.map((item) => (
          <Product key={item.name} item={item} />
        ))}
      </Grid>
    </>
  )
}

export { ProductGrid }
