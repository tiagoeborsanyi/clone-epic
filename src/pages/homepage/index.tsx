import './homepage.scss'
import Carousel from '../../components/carousel'
import ShowCards from '../../components/show-cards'
import ShowColumnsMiniCards from '../../components/show-columns-mini-cards'
import BoxGames from '../../components/box-games'

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <ShowCards />
      <ShowColumnsMiniCards />
      <BoxGames />
    </div>
  )
}

export default Homepage