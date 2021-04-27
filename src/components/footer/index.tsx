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
  </div>  
)

export default Footer