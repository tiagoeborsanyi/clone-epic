import './box-games.scss'

import HeaderShowCards from '../header-show-cards'

const BoxGames = () => (
  <div className='box-games'>
    <HeaderShowCards title='Jogos grátis' styleFont show />
    <div className="box-games__cards">
      <div className="box-games__card">
        <div className="box-games__image" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/clone-epic.appspot.com/o/tales-of-the-neonsea.jpg?alt=media)'}}>
          <span>GRÁTIS</span>
        </div>
        <h3 className='box-games__title'>Tales of the Neon Sea</h3>
        <span className='box-games__subtitle'>Grátis - 08 de abr. às 12:00</span>
      </div>
      <div className="box-games__card">
      <div className="box-games__image" style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/clone-epic.appspot.com/o/3-out-of-ten.jpg?alt=media)'}}>
          <span style={{backgroundColor: 'black'}}>EM BREVE</span>
        </div>
        <h3 className='box-games__title'>Tales of the Neon Sea</h3>
        <span className='box-games__subtitle'>Grátis - 08 de abr. às 12:00</span>
      </div>
    </div>
  </div>
)

export default BoxGames