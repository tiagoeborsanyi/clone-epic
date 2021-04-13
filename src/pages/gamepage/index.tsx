import { useEffect } from 'react'

import { dataItems } from '../../dataItems'

interface IGamePageProps {
  match: any
}

const GamePage: React.FC<IGamePageProps> = ({match}) => {
  console.log(match.params.id)

  useEffect(() => {
    // Se passar um id que nao existe (seja undefined) entao tenho que colocar uma modal de 404 ou page de 404
    const filterData = dataItems.filter(item => item.id === match.params.id)
    console.log(filterData[0])
  }, [match.params.id])
  return (
    <div>GAME PAGE</div>
  )
}

export default GamePage