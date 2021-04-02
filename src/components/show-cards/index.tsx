import './show-cards.scss'

import Card from '../card'

import {dataItems} from '../../dataItems'

const ShowCards = () => (
  <div className='show-cards'>
    {
      dataItems.map(card => (
        <>
          <Card urlImg={card.urlImage} />
        </>
      ))
    }
  </div>
)

export default ShowCards