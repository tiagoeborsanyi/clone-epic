import './homepage.scss'
import Carousel from '../../components/carousel'
import ShowCards from '../../components/show-cards'
import ShowColumnsMiniCards from '../../components/show-columns-mini-cards'

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <ShowCards />
      <ShowColumnsMiniCards />
    </div>
  )
}

export default Homepage