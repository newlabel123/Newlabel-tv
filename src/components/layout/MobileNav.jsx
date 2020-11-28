import React from 'react'
import { chakra, Flex, useMediaQuery } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Home } from '../../assets/icons/Home.svg'
import { ReactComponent as Folder } from '../../assets/icons/Folder.svg'
import { ReactComponent as TimeCircle } from '../../assets/icons/Time Circle.svg'
import { ReactComponent as Video } from '../../assets/icons/Video.svg'
import { ReactComponent as Screen } from '../../assets/icons/Vector.svg'
import styled from '@emotion/styled'

const NavItem = chakra(NavLink, {
  baseStyle: {
    bg: 'rgba(161,164,177,.2)',
    w: '45px',
    h: '45px',
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const MobileIcon = styled(NavItem)`
  svg {
    stroke: #505565
  }

  &:hover {
    background: rgba(244, 32, 32, 0.2);

    svg {
      stroke: rgba(0, 0, 0, 0.0);
      fill: #FF0202
    }
  }
`

function MobileNav () {
  const [isBelow768px] = useMediaQuery('(max-width: 768px)')

  return (
    <Flex justify="space-between" align="center" px="2rem" bg="#fff" d={isBelow768px ? 'flex' : 'none'} w="100%" h="65px" position="fixed" left="0" bottom="0" zIndex="500">
      <MobileIcon to="/" text="Home">
        <Home />
      </MobileIcon>
      <MobileIcon to="/movies">
        <Video />
      </MobileIcon>
      <MobileIcon to="/series">
        <Screen />
      </MobileIcon>
      <MobileIcon to="/profile">
        <Folder />
      </MobileIcon>
      <MobileIcon to="/recent">
        <TimeCircle />
      </MobileIcon>
    </Flex>
  )
}

export { MobileNav }
