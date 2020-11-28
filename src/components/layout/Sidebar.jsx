import React from 'react'
import { Box, Flex, HStack, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { ReactComponent as Home } from '../../assets/icons/Home.svg'
import { ReactComponent as Folder } from '../../assets/icons/Folder.svg'
import { ReactComponent as TimeCircle } from '../../assets/icons/Time Circle.svg'
import { ReactComponent as Video } from '../../assets/icons/Video.svg'
import { ReactComponent as Screen } from '../../assets/icons/Vector.svg'

function Sidebar () {
  const [isBelow768px] = useMediaQuery('(max-width: 768px)')

  return (
    <Box d={isBelow768px ? 'none' : 'block'} h="calc(100vh - 100px)" w="12rem" position="fixed" left="0" top="12rem">
      <VStack spacing="5.4rem">
        <NavItem to="/" text="Home" icon={<Home />} />
        <NavItem to="/movies" text="Movies" icon={<Video />} />
        <NavItem to="/series" text="Tv Shows" icon={<Screen />} />
        <NavItem to="/profile" text="Library" icon={<Folder />} />
        <NavItem to="/recent" text="Recent" icon={<TimeCircle />} />
      </VStack>
    </Box>
  )
}

export { Sidebar }

function NavItem ({ icon, text, to }) {
  return (
    <NavLink exact to={to}>
      <NavWrapper className="navlnk-wrapper" cursor="ponter" justify="space-between" align="center" overflow="hidden" borderRadius="1rem" bg="rgba(161,164,177, .2)" h="4rem" px="1rem">
        <IconBox>
          {icon}
        </IconBox>
        <Flex justify="center" className="link-text" w="0" transition="width .5s">
          <Text cursor="pointer" whiteSpace="nowrap" overflow="hidden" opacity="0" transition="opacity .5s" color="brand.gray300">{text}</Text>
        </Flex>
      </NavWrapper>
    </NavLink>
  )
}

const NavWrapper = styled(Flex)`
  &:hover {
    background: rgba(244, 32, 32, 0.2);

    .link-text {
      width: 60px;

      p {
        opacity: 1;
        color: #FF0202;
        padding-left: 1rem;
      }
    }

    svg {
      stroke: rgba(0, 0, 0, 0.0);
      fill: #FF0202
    }
  }
`

export const IconBox = styled(Flex)`
  svg {
    stroke: #A1A4B1;
  }
`
