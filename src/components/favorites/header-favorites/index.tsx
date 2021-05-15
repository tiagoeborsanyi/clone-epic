import { Link } from 'react-router-dom'

import './header-favorites.scss'

const HeaderFavorites: React.FC = () => (
  <div className='h-favorites'>
    <ul className='h-favorites-list'>
      <li className='h-favorites-list__item'><Link to='/'>Descobrir</Link></li>
      <li className='h-favorites-list__item'><Link to='/'>Navegar</Link></li>
    </ul>
    <div className='h-favorites-bloco'>
      <p className='h-favorites-bloco__title'>Lista de desejos</p>
      <span className='h-favorites-bloco__number'>2</span>
      <form action="#" className='h-favorites-bloco__form'>
        <div className='h-favorites-bloco__form-input'>
          <input type="text" placeholder='Procurar' />
        </div>
      </form>
    </div>
  </div>
)

export default HeaderFavorites