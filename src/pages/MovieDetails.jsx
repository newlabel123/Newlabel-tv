import { Box } from '@chakra-ui/react'
import React from 'react'
import { Trailer } from '../components/common'
import { Banner, Similar } from '../components/movie'

function MovieDetails () {
  return (
    <div>
      <Banner />
      <Trailer />
      <Similar />
    </div>
  )
}

export { MovieDetails }
