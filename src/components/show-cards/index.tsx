import './show-cards.scss'

import Card from '../card'
import HeaderShowCards from '../header-show-cards'

import {dataItems} from '../../dataItems'

const ShowCards = () => (
  <div className='show-cards'>
    <HeaderShowCards title='Promoção de primavera' show />
    <div className='show-cards__items'>
      {
        dataItems.filter((_, index) => index < 5).map(card => (
            <Card 
              key={card.id}
              urlImg={card.urlImage}
              otherProps={card}
            />
        ))
      }
    </div>
  </div>
)

export default ShowCards