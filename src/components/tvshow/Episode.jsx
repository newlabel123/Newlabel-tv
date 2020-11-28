import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

import playBox from '../../assets/icons/Play.svg'

function Episode ({ shot }) {
  return (
    <EpisodeBox>
      <div className="thumbnail">
        <div className="overlay" />
        <img className="scene" src={shot} alt="episode" />
        <img className="play" src={playBox} alt="" />
      </div>
      <div className="details">
        <h3>Episode 1</h3>
        <p>
          Three weeks, six countries - one divorce? Sometimes you need
          to spend time together
        </p>
        <hr />
        <div className="time">
          <p>59 mins</p>
          <div></div>
          <p>$2.99</p>
          <div></div>
          <p>Available for 48hrs</p>
        </div>
      </div>
    </EpisodeBox>
  )
}

export { Episode }

const EpisodeBox = styled(Box)`
  /* padding-top: 56.25%; */
  border-top: none;
  transition: all 0.5s;

  &::first-of-type {
    margin-left: none;
  }

  &:hover {
    img.scene {
      transform: scale(1.05);
    }

    img.play {
      opacity: 1;
    }

    .details {
      transform: translateY(-10px);
    }

    .time {
      opacity: 1;
    }

    .overlay {
      opacity: 1;
    }

    hr {
      opacity: 1;
    }
  }

  .thumbnail {
    width: 100%;
    height: 170px;
    position: relative;
    border-radius: 1rem;
    z-index: -1;
  }

  img.scene {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    transition: all 0.5s;
    border-radius: 1rem;
  }

  img.play {
    opacity: 0;
    width: 50px;
    position: absolute;
    left: 0rem;
    bottom: 1rem;
    transition: all 0.5s;
    z-index: 10;
  }

  .overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.05);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    opacity: 0;
    transition: 0.5s;
    border-radius: 1rem;
    z-index: 9;
  }

  .details {
    transition: all 0.5s;
  }

  .time {
    opacity: 0;
    align-items: center;
    display: flex;
    transition: all 0.5s;

    div {
      width: 1px;
      height: 1rem;
      margin: 0 1rem;
      background: #000;
    }
  }

  hr {
    margin: 1.2rem 0;
    width: 30px;
    background: red;
    transition: all 0.5s;
    opacity: 0;
  }

  h3 {
    margin: 1rem 0 0.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
  }
`
