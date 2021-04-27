import './game-carousel.scss'

interface GameCarouselProps {
  imagePageGame: string
}

const GameCarousel: React.FC<GameCarouselProps> = ({ imagePageGame }) => (
  <div 
    className='game-carousel'
    style={{backgroundImage: `url(${imagePageGame})`}}
  ></div>
)

export default GameCarousel