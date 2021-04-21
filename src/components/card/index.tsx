import React from 'react'

import './card.scss'

interface ICardProps {
  urlImg: string
  otherProps: any
}

const Card: React.FC<ICardProps> = ({ urlImg, otherProps }) => (
  <div className='card'>
    <div className='card__img' style={{backgroundImage: `url(${urlImg})`}}></div>
    <h3 className='card__title'>{otherProps.title.slice(0, 23)} {otherProps.title.length > 22 && '...'}</h3>
    <h4 className='card__subtitle'>{otherProps.subtitle}</h4>
    <span className='card__percent'>{otherProps.discount}</span>
    <span className='card__old-value'>{otherProps.oldValue}</span>
    <span className='card__value'>{otherProps.newValue}</span>
  </div>
)

export default Card