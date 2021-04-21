import { useEffect } from 'react'

import { dataItems } from '../../dataItems'

interface IGamePageProps {
  match: any
  history: any
}

const GamePage: React.FC<IGamePageProps> = ({match, history}) => {

  useEffect(() => {
    const filterData = dataItems.filter(item => item.id === match.params.id)
    if (!filterData[0]) {
      history.push('/')
    }
  }, [match.params.id, history])
  return (
    <div>GAME PAGE</div>
  )
}

export default GamePage