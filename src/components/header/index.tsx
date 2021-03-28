import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { IoIosGlobe, IoIosPerson } from 'react-icons/io'

import './header.scss'

const Header = () => (
  <div className='header'>
    <img src={Logo} alt="Logo" className="header__logo"/>
    <nav className="header__nav">
      <Link to="/" className="nav-link">
      <span>store</span>
      </Link>
      <Link to="/" className="nav-link"><span>perguntas frequentes</span></Link>
      <Link to="/" className="nav-link"><span>ajuda</span></Link>
    </nav>
    <div className="menu">
      <IoIosGlobe />
      <Link to="/" className="menu__link">
        <IoIosPerson />
        entrar
      </Link>
      <button className="menu__buttom">baixar epic games</button>
    </div>
  </div>
)

export default Header