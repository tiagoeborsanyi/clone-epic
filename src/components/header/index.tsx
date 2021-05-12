import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { IoIosGlobe, IoIosPerson, SiEpicgames } from 'react-icons/all'

import './header.scss'
import { useState } from 'react'

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const { logged, signOut, displayName } = useAuth()
  const [f, setF] = useState(false)

  const handleFocus = () => {
    setF(true)
  }

  return (
    <div className='header-up'>
      <div className='header'>
        <SiEpicgames className="header__logo" />
        <nav className="header__nav">
          <Link to="/" className={`nav-link ${history.location.pathname === '/' && 'selected-link'}`}>
          <span>store</span>
          </Link>
          {logged && <Link to='/biblioteca' className={`nav-link ${history.location.pathname === '/biblioteca' && 'selected-link'}`}><span>Biblioteca</span></Link>}
          <Link to="/" className="nav-link"><span>perguntas frequentes</span></Link>
          <Link to="/" className="nav-link"><span>ajuda</span></Link>
        </nav>
        <div className="menu">
          <IoIosGlobe />
          { !logged ?
            <Link to="/login" className="menu__link">
              <IoIosPerson />
              entrar
            </Link> :
            <div 
              className='menu__user-name'
              onMouseOver={handleFocus}
              onMouseLeave={() => setF(false)}>
              <button
                onMouseOver={handleFocus}
                onMouseLeave={() => setF(true)}>
                {displayName}
              </button>
            </div>
          }
          <button className="menu__buttom">baixar epic games</button>
        </div>
      </div>
      <div
        className={`menu__user-name--dropdown ${logged && 'menu__user-name--dropdown-hover'}`}
        style={f && logged ? {top: '6rem'} : {}}
      >
          <ul className='menu-dropdown__list'>
            <li className='menu-dropdown__item'>
              <Link to='/'>
                {displayName}
              </Link>
            </li>
            <li className='menu-dropdown__item'>
              <Link to='/'>
                Favoritos
              </Link>
            </li>
            <li className='menu-dropdown__item'>
              <Link to='/'>
                Configuracoes
              </Link>
            </li>
            <li className='menu-dropdown__item'>
              <button onClick={signOut}>
                Sair
              </button>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default withRouter(Header)