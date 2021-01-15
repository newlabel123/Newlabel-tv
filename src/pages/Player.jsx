import { AspectRatio, Box } from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'

function Player() {
  return (
    <Box w="100%" maxH="calc(100vh - 250px)" overflow="hidden">
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer
          url="https://vimeo.com/243556536"
          width="100%"
          height="70%"
          playing={true}
        />
      </AspectRatio>
    </Box>
  )
}

export { Player }
