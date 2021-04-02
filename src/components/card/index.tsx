import React from 'react'

import './card.scss'
// import Hitman from '../../assets/card-hitman.jpg'

interface ICardProps {
  urlImg: string
}

const Card: React.FC<ICardProps> = ({ urlImg }) => (
  <div className='card'>
    <div className='card__img' style={{backgroundImage: `url('../../assets/card-hitman.jpg')`}}></div>
    <h3 className='card__title'>Hitman 3</h3>
    <h4 className='card__subtitle'>IO Interactive</h4>
    <span className='card__percent'>-25%</span>
    <span className='card__old-value'>R$ 113,99</span>
    <span className='card__value'>R$ 85,49</span>
  </div>
)

export default Card