import { AspectRatio, Box } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'

function Player() {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://player.vimeo.com/video/290825945"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <ReactPlayer
          url="https://vimeo.com/290825945"
          width="100%"
          height="70%"
          playing={true}
        /> */}
      </AspectRatio>
    </Box>
  )
}

export { Player }
