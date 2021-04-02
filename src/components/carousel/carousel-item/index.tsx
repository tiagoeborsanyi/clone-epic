import './carouselItem.scss'

interface ICarouselItemProps {
  id: string
  image: string
  text: string
  clicked: Function
  selectedImage: string
}

const CarouselItem: React.FC<ICarouselItemProps> = ({ id, text, image, clicked, selectedImage }) => (
  <div className={`img card-carousel img--${id} ${selectedImage === image ? 'selected': ''}` } onClick={() => clicked(id)}>
    <div className="img" style={{ backgroundImage: image }}></div>
    <span className="img__text">{ text }</span>
  </div>
)

export default CarouselItem