import { Box, Fade } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import {
  Banner,
  LoadingScreen,
  LongCardSlider,
  WideCardSlider,
} from '../components/common'
import { SectionWrapper } from '../components/layout'
import { getSeriesData } from '../queries'

function Series() {
  const { isLoading, error, data } = useQuery('series', getSeriesData)

  if (isLoading) {
    return <LoadingScreen />
  }

  if (error) {
    console.log({ error })
  }

  return (
    <Fade in={true}>
      <Box>
        <Banner bannerData={data?.banner} />
        <Box>
          {data.sections.map((item) => (
            <SectionWrapper key={item.id} title={item.title}>
              {/* {item.cardType === 'long' ? (
                <LongCardSlider items={item.products} />
              ) : (
                <WideCardSlider items={item.products} />
              )} */}
               <LongCardSlider items={item.products} />
            </SectionWrapper>
          ))}
        </Box>
        
      </Box>
    </Fade>
  )
}

export { Series }


// <Box>
//   {data?.sections?.map((item) => (
//     <SectionWrapper key={item.id} title={item.title}>
//       {item.cardType === 'long' ? (
//         <LongCardSlider items={item.products} />
//       ) : (
//         <WideCardSlider items={item.products} />
//       )}
//     </SectionWrapper>
//   ))}
// </Box>