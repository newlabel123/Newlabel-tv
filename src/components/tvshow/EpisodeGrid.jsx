import { Grid } from '@chakra-ui/react'
import React from 'react'

import ep1 from '../../assets/images/samples/ep1.jpg'
import ep2 from '../../assets/images/samples/ep2.jpg'
import ep3 from '../../assets/images/samples/ep3.jpg'
import ep4 from '../../assets/images/samples/ep4.jpg'
import ep5 from '../../assets/images/samples/ep5.jpg'
import ep6 from '../../assets/images/samples/ep6.jpg'
import ep7 from '../../assets/images/samples/ep7.jpg'
import ep8 from '../../assets/images/samples/ep8.jpg'

import { Episode } from './Episode'

function EpisodeGrid () {
  const episodes = [
    ep1,
    ep2,
    ep3,
    ep4,
    ep5,
    ep6,
    ep7,
    ep8
  ]

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="1.6rem">
      {episodes.map(ep => (
        <Episode key={ep} shot={ep} />
      ))}
    </Grid>
  )
}

export { EpisodeGrid }
