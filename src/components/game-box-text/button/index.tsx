import React from 'react'
import { GoPlus } from 'react-icons/go'

import './button-game.scss'

interface IButtonGameProps {
  handleToCart: () => void
}

export const ButtonGame: React.FC<IButtonGameProps> = ({ children, handleToCart }) => {
  return (
    <button className='button-game game-wallet' onClick={handleToCart}>
      {children}
    </button>
  )
}

interface IButtonGameFavoritesProps {
  handleFavorited: () => void
}

export const ButtonGameFavorites: React.FC<IButtonGameFavoritesProps> = ({ handleFavorited }) => {
  return (
    <button className='button-game game-favorites' onClick={handleFavorited}>
      <GoPlus />
    </button>
  )
}