import React from 'react'
import { SectionWrapper } from '../layout'
import Slider from 'react-slick'

import trwhy from '../../assets/images/samples/13r.jpg'
import enola from '../../assets/images/samples/enola.jpg'
import sonic from '../../assets/images/samples/sonic.jpg'
import venom from '../../assets/images/samples/venom.jpg'
import trailer from '../../assets/videos/trailer.mp4'
import { ProductWide } from '../common'

function Recommended () {
  const items = [
    {
      name: '13 Reasons Why',
      image: trwhy
    },
    {
      name: 'Enola Holmes',
      image: enola
    },
    {
      name: 'Sonic',
      image: sonic
    },
    {
      name: 'Venom',
      image: venom
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <SectionWrapper mb="7rem" title="Recommended">
      <Slider {...settings}>
        {items.map((item, i) => (
          <ProductWide index={i} key={i} item={item} trailer={trailer} />
        ))}
      </Slider>
    </SectionWrapper>
  )
}

export { Recommended }
