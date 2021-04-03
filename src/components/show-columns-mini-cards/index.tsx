import './show-columns-mini-cards.scss'

import HeaderShowCards from '../header-show-cards'

const ShowColumnsMiniCards = () => (
  <div className='show-columns-mini-cards'>
    <HeaderShowCards title='Novos e populares' />
    <div className='columns-mini-card'>
      <div className='column-mini-card'></div>
      <div className='column-mini-card'></div>
      <div className='column-mini-card'></div>
    </div>
  </div>
)

export default ShowColumnsMiniCards