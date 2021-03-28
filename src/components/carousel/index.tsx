import { useState } from 'react'

import './carousel.scss'
import { carouselData as data } from './carousel.js'
import CarouselItem from './carousel-item'

const Carousel = () => {
  const [cImage, setCImage] = useState('url(https://lh3.googleusercontent.com/proxy/1c3_0wmkLLpKDSDfNVoJmVWfq6Sk3m92JWvV1JWp8XIgoeMFbh8LzPC6C_68I41DojqIvKp0MqMR3iPZdQm-oJFCF0b-mgN2iBl8FPwAiL4DsTHAczLRDeeiRk2_8dx_pM55A3jGnl2u9P7JOBqiWK22Kwlrw3Tm_XeeG2VbRfhA)')
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