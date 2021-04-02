import './header-show-cards.scss'

import { Link } from 'react-router-dom'

interface IHeaderShowcardsProps {
  title: string
  show?: boolean
}
 
const HeaderShowCards: React.FC<IHeaderShowcardsProps> = ({ title, show }) => (
  <div className='header-show-cards'>
    <h3>{title}</h3>
    <Link to='/' className={`${show ? 'header-show-cards__Show' : 'header-show-cards__invisible'}`}>VER TUDO</Link>
  </div>
)

export default HeaderShowCards