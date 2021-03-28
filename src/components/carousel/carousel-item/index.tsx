import './carouselItem.scss'

interface ICarouselItemProps {
  id: string
  image: string,
  text: string
}

const CarouselItem: React.FC<ICarouselItemProps> = ({ id, text, image }) => (
  <div className={`img card img--${id}`} id="1">
    <div className="img" style={{ backgroundImage: image }}></div>
    <span className="img__text">{ text }</span>
  </div>
)

export default CarouselItem