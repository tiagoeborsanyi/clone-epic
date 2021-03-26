import React from 'react'

import Logo from '../../assets/logo.png'
import { IoIosGlobe, IoIosPerson } from 'react-icons/io'

import './header.scss'

const Header = () => (
  <div className='header'>
    <img src={Logo} alt="Logo" className="header__logo"/>
    <nav className="header__nav">
      <a href="#" className="nav-link">
        <span>store</span>
      </a>
      <a href="#" className="nav-link">perguntas frequentes</a>
      <a href="#" className="nav-link">ajuda</a>
    </nav>
    <div className="menu">
      <IoIosGlobe />
      <a href="#" className="menu__link">
        <IoIosPerson />
        entrar
      </a>
      <button className="menu__buttom">baixar epic games</button>
    </div>
  </div>
)

export default Header