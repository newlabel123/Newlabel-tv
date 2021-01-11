import { Box, Fade } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Banner, LongCardSlider, WideCardSlider } from '../components/common'
import { SectionWrapper } from '../components/layout'
import { getSinglesData } from '../queries'

function Singles() {
  const { isLoading, error, data } = useQuery('singles', getSinglesData)

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Fade in={true}>
      <Box>
        <Banner bannerData={data.banner} />
        <Box>
          {data.sections.map((item) => (
            <SectionWrapper key={item.id} title={item.title}>
              {item.cardType === 'long' ? (
                <LongCardSlider items={item.products} />
              ) : (
                <WideCardSlider items={item.products} />
              )}
            </SectionWrapper>
          ))}
        </Box>
      </Box>
    </Fade>
  )
}

export { Singles }
