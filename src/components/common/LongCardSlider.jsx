import React from 'react'
import { ProductLong } from './ProductLong'
import { SliderWrapper } from './SliderWrapper'

function LongCardSlider({ items }) {
  return (
    <SliderWrapper>
      {items.map((item) => (
        <ProductLong
          key={item.id}
          item={item}
          productType={item.type[0].__component}
          minW="17rem"
        />
      ))}
    </SliderWrapper>
  )
}

export { LongCardSlider }
