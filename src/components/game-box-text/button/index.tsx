import React from 'react'
import './button-game.scss'

interface IButtonGameProps {
  handleToCart: () => void
}

export const ButtonGame: React.FC<IButtonGameProps> = ({ children, handleToCart }) => {
  return (
    <button className='button-game' onClick={handleToCart}>
      {children}
    </button>
  )
}

// export default ButtonGame