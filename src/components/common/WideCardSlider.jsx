import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { ProductModal } from './ProductModal'
import { ProductWide } from './ProductWide'
import { SliderWrapper } from './SliderWrapper'

function WideCardSlider({ items }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <Box>
      <SliderWrapper>
        {items.map((item) => (
          <ProductWide
            key={item.id}
            item={item}
            productType={item.type[0].__component}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        ))}
      </SliderWrapper>
      <AnimatePresence>{showModal && <ProductModal />}</AnimatePresence>
    </Box>
  )
}

export { WideCardSlider }
