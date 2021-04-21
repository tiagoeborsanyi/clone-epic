import React from 'react'
import { Link } from 'react-router-dom'

import './card.scss'

interface ICardProps {
  urlImg: string
  otherProps: any
}

const Card: React.FC<ICardProps> = ({ urlImg, otherProps }) => (
  <div className='card'>
    <Link to={`/game/${otherProps.id}`} className='card__img-link'><div className='card__img' style={{backgroundImage: `url(${urlImg})`}} /></Link>
    <h3 className='card__title'>{otherProps.title.slice(0, 23)} {otherProps.title.length > 22 && '...'}</h3>
    <h4 className='card__subtitle'>{otherProps.subtitle}</h4>
    <span className='card__percent'>{otherProps.discount}</span>
    <span className='card__old-value'>{otherProps.oldValue}</span>
    <span className='card__value'>{otherProps.newValue}</span>
  </div>
)

export default Card