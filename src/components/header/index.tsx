import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import Logo from '../../assets/logo.png'
import { IoIosGlobe, IoIosPerson } from 'react-icons/io'

import './header.scss'

const Header = () => {
  const { logged, displayName } = useAuth()
  console.log(logged, displayName)

  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className="header__logo"/>
      <nav className="header__nav">
        <Link to="/" className="nav-link selected-link">
        <span>store</span>
        </Link>
        {logged && <Link to='/' className="nav-link"><span>Biblioteca</span></Link>}
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
          <div>
            {displayName}
          </div>
        }
        <button className="menu__buttom">baixar epic games</button>
      </div>
    </div>
  )
}

export default Header