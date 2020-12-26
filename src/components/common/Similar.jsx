import React from 'react'

import { SectionWrapper } from '../layout'
import { ProductGrid } from '../common'

function Similar({ related }) {
  return (
    <SectionWrapper title="You might also like">
      <ProductGrid items={related} />
    </SectionWrapper>
  )
}

export { Similar }
