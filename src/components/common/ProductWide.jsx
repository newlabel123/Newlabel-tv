import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useHistory } from 'react-router-dom'

function ProductWide({ item, productType, showModal, setShowModal }) {
  const history = useHistory()

  const handleClick = () => {
    if (productType === 'product.single-item') {
      history.push(`/singles/${item.id}`)
    } else {
      history.push(`/series/${item.id}`)
    }
  }

  return (
    <Wrapper
      onClick={() => setShowModal(!showModal)}
      maxW="300px"
      h="56.25%"
      pos="relative"
      cursor="pointer"
      className="item"
      flexShrink="0"
    >
      <Image
        borderRadius="5px"
        src={item.widePoster?.url}
        alt={item.title}
        w="100%"
        h="100%"
      />
    </Wrapper>
  )
}

export { ProductWide }

const Wrapper = styled(Box)`
  transition: transform 300ms ease 100ms;

  @media (min-width: 768px) {
    &:hover ~ .item {
      transform: translateX(10%) !important;
    }

    &:hover {
      transform: scale(1.2) !important;
    }
  }
`
