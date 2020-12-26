import { Flex, HStack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Btn, Similar, Trailer } from '../components/common'
import { SectionWrapper } from '../components/layout'
import { Banner, EpisodeGrid } from '../components/series'
import { getProductDetails } from '../queries'

function SeriesDetails() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSeason, setActiveSeason] = useState(null)
  const { id } = useParams()

  const { data, isLoading } = useQuery(
    ['getProductDetails', id],
    getProductDetails
  )

  useEffect(() => {
    if (data) {
      setActiveSeason(data.type[0].seasons[0])
    }
  }, [data])

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      <Banner
        title={data.title}
        description={data.description}
        buyPrice={data.type[0].buyPrice}
        rentPrice={data.type[0].rentPrice}
        runtime={data.type[0].runtime}
        bannerImg={data.banner.url}
      />
      <SectionWrapper mt="0">
        <HStack spacing="2.5rem" my="2.5rem">
          <TabBtn
            onClick={() => setActiveTab(0)}
            className={activeTab === 0 && 'active'}
          >
            Episodes
          </TabBtn>
          <TabBtn
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 && 'active'}
          >
            Details
          </TabBtn>
        </HStack>
      </SectionWrapper>
      <SectionWrapper mt="1rem">
        {activeTab === 0 ? (
          <>
            <SectionWrapper mt="5rem">
              <Tabs>
                {data.type[0].seasons.map((season, i) => (
                  <TabItem
                    key={season.id}
                    className={
                      (activeSeason?.seasonNumber || 1) === i + 1 && 'active'
                    }
                    onClick={() => setActiveSeason(season)}
                  >
                    Season {season.seasonNumber}
                  </TabItem>
                ))}
              </Tabs>
            </SectionWrapper>
            <EpisodeGrid episodes={activeSeason?.episodes || []} />
          </>
        ) : (
          <>
            <Trailer />
            <SectionWrapper title="Genres">
              <Flex align="center">
                {data.genres.map((genre, i) => (
                  <>
                    <Text fontSize="1.4rem">
                      {genre.name}{' '}
                      <Text as="span">{i < i.length - 1 && ','}</Text>{' '}
                    </Text>
                  </>
                ))}
              </Flex>
            </SectionWrapper>
            <Similar related={data.related} />
          </>
        )}
      </SectionWrapper>
    </div>
  )
}

export { SeriesDetails }

const TabBtn = styled(Btn)`
  .active {
    background: #f00;
    color: #fff;
  }
`

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
