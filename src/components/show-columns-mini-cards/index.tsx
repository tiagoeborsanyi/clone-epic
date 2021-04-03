import './show-columns-mini-cards.scss'

import HeaderShowCards from '../header-show-cards'
import ColumnMiniCard from '../column-mini-card'

const ShowColumnsMiniCards = () => (
  <div className='show-columns-mini-cards'>
    <HeaderShowCards title='Novos e populares' />
    <div className='columns-mini-card'>
      <ColumnMiniCard />
      <ColumnMiniCard />
      <ColumnMiniCard />
    </div>
  </div>
)

export default ShowColumnsMiniCards