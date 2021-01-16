import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

import trailer from '../assets/videos/trailer2.mp4'

function Player() {
  return (
    <Wrapper>
      <Box className="video-container">
        <video
          controls
          id="trailer"
          style={{ width: '100%', height: '100%', borderRadius: '5px' }}
        >
          <source src={trailer} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Box>
    </Wrapper>
  )
}

export { Player }

const Wrapper = styled(Box)`
  .video-container {
    position: absolute;
    z-index: 100000;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .video-container video {
    /* Make video to at least 100% wide and tall */
    min-width: 100%;
    min-height: 100%;

    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;

    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
