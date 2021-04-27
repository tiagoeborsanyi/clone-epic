import {
  AiFillFacebook,
  AiOutlineTwitter,
  IoLogoYoutube,
  IoIosArrowUp
} from 'react-icons/all'

import './footer.scss'

const Footer = () => (
  <div className='footer'>
    <div className='footer-social'>
      <ul className='footer-social__items'>
        <li className='footer-social__item'><AiFillFacebook /></li>
        <li className='footer-social__item'><AiOutlineTwitter /></li>
        <li className='footer-social__item'><IoLogoYoutube /></li>
      </ul>
      <div className='footer-social__arrow'><IoIosArrowUp /></div>
    </div>
    <div className='footer-sources'>
      <div className='footer-sources__about'>
        <h3>Recursos</h3>
        <div>
          <span>Apoie um criador</span>
          <span>Publicar na Epic Games</span>
          <span>Carreiras</span>
          <span>Empresa</span>
          <span>Politica de FanArt</span>
          <span>UX Research</span>
          <span>EULA da loja</span>
          <span>Serviços On-line</span>
          <span>Regras da Comunidade</span>
        </div>
      </div>
      <div className='footer-sources__games'>
        <h3>Feito pela Epic Games</h3>
        <div>
          <span>Battle Beakers</span>
          <span>Fortnite</span>
          <span>Infinity Blade</span>
          <span>Robo Recall</span>
          <span>Shadow Complex</span>
          <span>Spyjinx</span>
          <span>Unreal Tournament</span>
        </div>
      </div>
    </div>
    <div className='footer-legal'>
      <p>
        © 2021, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.   
      </p>
    </div>
  </div>  
)

export default Footer