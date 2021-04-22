import { useState } from 'react'

import './game-box-text.scss'

const GameBoxText = () => {
  const [expand, setExapande] = useState(false)

  function handleExpand() {
    setExapande(!expand)
    console.log(expand)
  }

  return (
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

      <div className='game-box-text-columns game-box-text-about' style={!expand ? {height: '500px', overflow: 'hidden'} : {height: '100%'}}>
        <div className='game-box-text-about__title'>
          <h3>Sobre Grand Theft Auto V</h3>
        </div>
        <div className='game-box-text-about-content'>

          <div className='game-box-text-about-content__box'>
            <h3>Desenvolvedor</h3>
            <span>Rockstar Games</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>EDITORA</h3>
            <span>Rockstar Games</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Data de lançamento</h3>
            <span>17 de set. de 2013</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Tags</h3>
            <span>Ação, Aventura</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Classificação</h3>
            <span>-</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Plataforma</h3>
            <span>-</span>
          </div>

          <div className='game-box-text-about-content__desc' style={expand ? {height: 'calc(100% + 7rem)'} : {height: '50%'}}>
            <div>
              <h3>Grand Theft Auto V: Edição Premium</h3>
              <p>
                O Grand Theft Auto V: O Grand Theft Auto V: Edição Premium inclui o Modo História completo do Grand Theft Auto V, acesso gratuito ao mundo em constante evolução do Grand Theft Auto Online e todo o conteúdo e melhorias de jogo já lançados, incluindo O Golpe do Juízo Final, Tráfico de Armas, Acima da Lei, Motoqueiros e muito mais. Você recebe o Kit Inicial de Esquema Criminal, a maneira mais rápida de começar seu império do crime no Grand Theft Auto Online.
              </p>
              <h3>GRAND THEFT AUTO V</h3>
              <p>
                Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.
              </p>
              <h3>GRAND THEFT AUTO ONLINE</h3>
              <p>
                Descubra um mundo de escolhas e maneiras de jogar à medida em que você sobe na hierarquia do crime de Los Santos e Blaine County na experiência online definitiva.
              </p>
              <h3>KIT INICIAL DE ESQUEMA CRIMINAL</h3>
              <p>
                O Kit Inicial de Esquema Criminal é a maneira mais rápida dos jogadores do GTA Online darem o pontapé inicial no seu próprio império do crime com o conteúdo mais popular e divertido disponível e com bônus de GTA$1.000.000 para gastar no GTA Online (o conteúdo inteiro vale mais de GTA$ 10.000.000 se comprado separadamente).
              </p>
              <h3>INICIE O SEU IMPÉRIO DO CRIME</h3>
              <p>
                Inicie negócios por meio do seu Escritório Executivo do Maze Bank West, pesquise tecnologias de armas poderosas no seu Bunker de Tráfico de Armas subterrâneo e use a sua fábrica de dinheiro falso para iniciar operações de falsificação bem lucrativas.
              </p>
              <h3>UMA FROTA DE VEÍCULOS PODEROSOS</h3>
              <p>
                Saia rasgando pelas ruas com uma série de 10 veículos de alto desempenho, incluindo um supercarro, motocicletas, o Dune de Combate armado, um helicóptero, um carro de rally e mais. Você também irá adquirir propriedades, incluindo uma garagem para 10 carros para guardar a sua crescente frota.
              </p>
              <h3>ARMAS, ROUPAS E TATUAGENS</h3>
              <p>
                Você também terá acesso ao Lança-granada Compacto, Rifle de Elite e o Fuzil Compacto, além de trajes de Corridas Acrobáticas, tatuagens de motoqueiro e mais.
              </p>
            </div>

            <div className='game-box-text-about-content__button' style={!expand ? {bottom: '21%'} : {bottom: '0%'}}>
              <div className={`game-box-text-about-content__button--shadow ${expand && 'invisible'}`}></div>
              <button onClick={handleExpand}>
                MOSTRAR MENOS
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default GameBoxText