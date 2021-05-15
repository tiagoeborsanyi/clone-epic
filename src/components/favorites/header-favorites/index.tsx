import { Link } from 'react-router-dom'

import './header-favorites.scss'

const HeaderFavorites: React.FC = () => (
  <div className='h-favorites'>
    <ul>
      <li><Link to='/'>Descobrir</Link></li>
      <li><Link to='/'>Navegar</Link></li>
    </ul>
    <div>
      <p>Lista de desejos</p>
      <span>2</span>
      <form action="#">
        <div>
          <input type="text" placeholder='Procurar' />
        </div>
      </form>
    </div>
  </div>
)

export default HeaderFavorites