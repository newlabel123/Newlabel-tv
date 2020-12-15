import { HStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { Btn } from '../components/common'
import { SectionWrapper } from '../components/layout'
import { Banner, EpisodeGrid } from '../components/tvshow'

function TvShowDetails() {
  return (
    <div>
      <Banner />
      <SectionWrapper mt="0">
        <HStack spacing="2.5rem" my="2.5rem">
          <Btn>Episodes</Btn>
          <Btn>Details</Btn>
          <Btn>Trailer</Btn>
        </HStack>
      </SectionWrapper>
      <SectionWrapper mt="0">
        <Tabs>
          <TabItem className="active">Season 1</TabItem>
          <TabItem>Season 2</TabItem>
          <TabItem>Season 3</TabItem>
        </Tabs>
      </SectionWrapper>
      <SectionWrapper mt="1rem">
        <EpisodeGrid />
      </SectionWrapper>
    </div>
  )
}

export { TvShowDetails }

const Tabs = styled.div`
  display: flex;
`

const TabItem = styled.p`
  font-size: 1.4rem;
  margin-right: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  cursor: pointer;

  &::after {
    content: '';
    width: 0%;
    opacity: 0;
    position: absolute;
    height: 2px;
    background: #f00;
    left: 0;
    bottom: -0.1rem;
    transition: all 0.5s;
  }

  &:hover {
    &::after {
      width: 100%;
      opacity: 1;
    }
  }

  &.active {
    border-bottom: 2px solid red;
  }
`
