import React from 'react'

import { SectionWrapper } from '../layout'
import { LongCardSlider } from '../common'

function Similar({ related }) {
  return (
    <SectionWrapper title="You might also like">
      <LongCardSlider items={related} />
    </SectionWrapper>
  )
}

export { Similar }
