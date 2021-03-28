import './carousel.scss'
import { carouselData as data } from './carousel.js'
import CarouselItem from './carousel-item'

const Carousel = () => (
  <div className='carousel'>
    <div className='img img--central'></div>
    {
      data.map(item => (
        <CarouselItem 
          key={item.id}
          id={item.id}
          image={item.image}
          text={item.text}
        />
      ))
    }
  </div>
)

export default Carousel