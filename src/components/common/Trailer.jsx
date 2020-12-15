import { Box } from '@chakra-ui/react'
import React from 'react'
import { SectionWrapper } from '../layout'

import trailer from '../../assets/videos/trailer2.mp4'
import poster from '../../assets/images/samples/ns.jpg'

function Trailer() {
  return (
    <SectionWrapper title="Trailer">
      <Box>
        <video
          poster={poster}
          controls
          id="trailer"
          style={{ width: '500px', borderRadius: '5px' }}
        >
          <source src={trailer} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Box>
    </SectionWrapper>
  )
}

export { Trailer }
