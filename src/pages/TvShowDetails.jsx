import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Btn } from '../components/common'
import { Banner, EpisodeGrid } from '../components/tvshow'

function TvShowDetails () {
  return (
    <div>
      <Banner />
      <HStack spacing="2.5rem" my="2.5rem">
        <Btn>Episodes</Btn>
        <Btn>Details</Btn>
        <Btn>Trailer</Btn>
      </HStack>
      <EpisodeGrid />
    </div>
  )
}

export { TvShowDetails }
