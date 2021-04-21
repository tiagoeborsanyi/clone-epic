import './game-box-text.scss'

const GameBoxText = () => (
  <section className='game-box-text'>
    <div className='game-box-text-columns game-box-text-description'>
      <div className='game-box-text-description__logo'>
        <img src='https://firebasestorage.googleapis.com/v0/b/clone-epic.appspot.com/o/logo-gta.png?alt=media' alt='logo' />
      </div>
      <div className='game-box-text-description-content'>
        <div className='game-box-text-description-content__text'>
          <p>
            O Grand Theft Auto V: Edição Premium inclui o Modo História completo do Grand Theft Auto V, Grand Theft Auto Online e todo o conteúdo e melhorias de jogo já lançados. Você também recebe o Kit Inicial de Esquema Criminal
          </p>
        </div>
        <div className='game-box-text-description-content__value'>
          <span>R$ 69,99</span>
        </div>
        <div className='game-box-text-description-content__button'>
          <button>
            compre agora
          </button>
        </div>
      </div>
    </div>

    <div className='game-box-text-columns game-box-text-about'>
      <div className='game-box-text-about__title'>
        <h3>Sobre Grand Theft Auto V</h3>
      </div>
      <div className='game-box-text-about-content'>
        
      </div>
    </div>
  </section>
)

export default GameBoxText