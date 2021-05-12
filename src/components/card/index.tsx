import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs'

import './card.scss'

interface ICardProps {
  urlImg: string
  otherProps: any
  onLib?: boolean
}

const Card: React.FC<ICardProps> = ({ urlImg, otherProps, onLib }) => {
  const handleAddGame = (event: any) => {
    event.preventDefault()
    console.log('clicado', otherProps.id)
  }
  
  return (
    <div className='card'>
      <Link to={!onLib ? `/game/${otherProps.id}` : {}} className='card__img-link'>
        <div className='card__img' style={{backgroundImage: `url(${urlImg})`}} />
        <button className='card__button' onClick={handleAddGame}>
          <BsPlusCircle />
        </button>
        <span className='card__tooltip'>
          Para Lista de Desejos
        </span>
      </Link>
      <h3 className='card__title'>{otherProps.title.slice(0, 23)} {otherProps.title.length > 22 && '...'}</h3>
      <h4 className='card__subtitle'>{otherProps.subtitle}</h4>
      {!onLib && (
        <>
        <span className='card__percent'>{otherProps.discount}</span>
        <span className='card__old-value'>{otherProps.oldValue}</span>
        <span className='card__value'>{otherProps.newValue}</span>
        </>
      )}
    </div>
  )
}

export default Card