import './column-mini-card.scss'

import HeaderShowCards from '../header-show-cards'

interface iHeaderShowCardsProps {
  title: string
  show: boolean
}

const ColumnMiniCard: React.FC<iHeaderShowCardsProps> = ({ children, title, show }) => (
  <div className='column-mini-card'>
    <HeaderShowCards title={title} show={show} />
    { children }
  </div>
)

export default ColumnMiniCard