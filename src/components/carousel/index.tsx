import { useState } from 'react'

import './carousel.scss'
import { carouselData as data } from './carousel.js'
import CarouselItem from './carousel-item'

const Carousel = () => {
  const [cImage, setCImage] = useState('url(https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/08/hitman-2-950x534.jpg)')
  function clickedItem(id: string): void {
    for (let img of data) {
      if (img.id === id) {
        setCImage(img.image)
      }
    }
  }

  return (
    <div className='carousel'>
      <div className='img img--central' style={{backgroundImage: cImage}}></div>
      {
        data.map(item => (
          <CarouselItem 
            key={item.id}
            id={item.id}
            image={item.image}
            text={item.text}
            clicked={clickedItem}
            selectedImage={cImage}
          />
        ))
      }
    </div>
  )
}

export default Carousel