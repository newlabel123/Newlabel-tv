import { Box, HStack, Input } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'

import {
  BsPlay,
  BsPause,
  BsArrowClockwise,
  BsArrowCounterclockwise,
  BsVolumeUp,
} from 'react-icons/bs'

import trailer from '../assets/videos/trailer2.mp4'

function Player() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [played, setPlayed] = useState(0)
  const [seeking, setSeeking] = useState(false)
  const playerRef = useRef(null)

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
  }

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
  }

  const adjustVolume = ({ target }) => {
    setVolume(target.value / 100)
  }

  const handleProgress = (e) => {
    if (!seeking) {
      setPlayed(e.played)
    }
  }

  const seek = ({ target }) => {
    setPlayed(parseFloat(target.value / 100))
  }

  const handleSeekStart = ({ target }) => {
    setSeeking(true)
  }

  const handleSeekRelease = ({ target }) => {
    setSeeking(false)
    playerRef.current.seekTo(target.value / 100, 'fraction')
  }

  return (
    <Wrapper>
      <Box className="video-container" color="brand.red">
        <ReactPlayer
          ref={playerRef}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
          url={trailer}
        />

        <Box px="2rem" w="100%" pos="absolute" bottom="3rem">
          <Input
            type="range"
            min={0}
            max={100}
            value={played * 100}
            onChange={seek}
            onMouseDown={handleSeekStart}
            onMouseUp={handleSeekRelease}
            borderRadius="2rem"
            w="100%"
            h=".4rem"
            border="none"
            outline="none"
            background="#f00"
            cursor="pointer"
            _focus={{
              outline: 'none',
              border: 'none',
            }}
          />

          <HStack mt="1.5rem" transform="translateX(-.7rem)">
            <Box
              fontSize="3rem"
              background="transparent"
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <BsPause /> : <BsPlay />}
            </Box>
            <HStack fontSize="2rem" spacing="1rem">
              <BsVolumeUp />
              <Input
                borderRadius="2rem"
                w="100px"
                h=".3rem"
                border="none"
                outline="none"
                type="range"
                background="#f00"
                cursor="pointer"
                onChange={adjustVolume}
                _focus={{
                  outline: 'none',
                  border: 'none',
                }}
              />
              <BsArrowClockwise onClick={handleForward} />
              <BsArrowCounterclockwise onClick={handleRewind} />
            </HStack>
          </HStack>
        </Box>
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
