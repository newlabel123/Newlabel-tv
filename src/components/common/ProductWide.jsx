import React from 'react'
import { Box, Icon, Image, useMediaQuery } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function ProductWide({
  index,
  item,
  productType,
  showModal,
  setShowModal,
  currentItem,
  setCurrentItem,
}) {
  const history = useHistory()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const handleClick = () => {
    if (isLargerThan768) {
      setCurrentItem(item)

      if (!currentItem || currentItem.id === item.id) {
        setShowModal(!showModal)
        return
      }

      return
    }

    if (productType === 'product.single-item') {
      history.push(`/singles/${item.id}`)
    } else {
      history.push(`/series/${item.id}`)
    }
  }

  return (
    <Wrapper
      index={index}
      onClick={handleClick}
      maxW={['230px', '300px']}
      h={['129px !important', '168.75px !important']}
      mr=".8rem"
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
      <Box id="overlay" transition="all .5s .4s">
        <Icon
          position="absolute"
          bottom=".5rem"
          left="50%"
          transform="translateX(-50%)"
          w="5rem"
          h="5rem"
          color="#fff"
          as={MdKeyboardArrowDown}
        />
      </Box>
    </Wrapper>
  )
}

export { ProductWide }

const Wrapper = styled(Box)`
  transition: transform 300ms ease 100ms;

  #overlay {
    background: linear-gradient(
      180deg,
      rgba(13, 2, 2, 0) 0%,
      rgba(0, 0, 0, 0.6629026610644257) 54%
    );
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    border-radius: 5px;
    z-index: 1;
  }

  @media (min-width: 768px) {
    &:hover ~ .item {
      transform: translateX(10%) !important;
    }

    &:hover {
      z-index: 2;
      transform: scale(1.2) !important;
      transform-origin: ${(props) => (props.index === 0 ? 'left' : 'center')};

      #overlay {
        opacity: 1;
      }
    }
  }
`
