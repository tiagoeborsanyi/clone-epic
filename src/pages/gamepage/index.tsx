import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'
import { dataItems } from '../../dataItems'
import GameCarousel from '../../components/game-carousel'
import GameBoxText from '../../components/game-box-text'

interface GameProps {
  id: string
  urlImage: string
  imagePageGame: string
  title: string
  subtitle: string
  discount: string
  oldValue: string
  newValue: string
  description: string
  publishing: string
  plataform: string
  tags: string[]
  favorited: boolean
}

interface IGamePageProps {
  match: any
  history: any
}

const GamePage: React.FC<IGamePageProps> = ({match, history}) => {
  const { logged } = useAuth()
  const [game, setGame] = useState<GameProps | undefined>()

  useEffect(() => {
    const filterData = dataItems.filter(item => item.id === match.params.id)
    if (!filterData[0]) {
      history.push('/')
    }
    setGame(filterData[0])
  }, [match.params.id, history])
  
  return (
    <div>
      <GameCarousel imagePageGame={game ? game['imagePageGame'] : ''} />
      <GameBoxText game={game} logged={logged} />
    </div>
  )
}

export default GamePage