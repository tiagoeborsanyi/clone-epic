import { useState, useEffect } from 'react'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import firebase from 'firebase/app'

import './game-box-text.scss'
import { firestore } from '../../firebase/firebase.utils'
import { useAuth } from '../../hooks/auth'
import { ButtonGame, ButtonGameFavorites } from './button'

interface GameProps extends RouteComponentProps {
  game: any
  logged: boolean
  modalClosed: () => void
}

const GameBoxText:React.FC<GameProps> = ({ game, logged, history, modalClosed }) => {
  const { userId } = useAuth()
  const [expand, setExapande] = useState(false)
  const [payGame, setPayGame] = useState<boolean>(false)

  useEffect(() => {
    async function efeito () {
      await firestore.doc(`users/${userId}`).get().then(doc => {
        // console.log(doc.data())
        let objUpdate: any
        if (doc.exists) {
          const ex = doc.data()
          for (let k in ex) {
            // console.log(k, ex[k])
            if (k === 'biblioteca') {
              objUpdate = ex[k]
            }
            
          }
        }
        // console.log(objUpdate)
        if (game && objUpdate) {
          const i = objUpdate.find((el: any) => el.id === game.id)
          if (i) {
            setPayGame(true)
          }
        }
        
      })
    }
    if (userId) {
      efeito()
    }
  })

  function handleExpand() {
    setExapande(!expand)
    // console.log(expand)
  }

  const handleToCart = () => {
    if (logged) {
      // console.log(game)
      modalClosed()
    } else {
      history.push('/login')
    }
  }

  const handleFavorited = async () => {
    if (logged) {
      // console.log(game)
      try {
        await firestore.doc(`users/${userId}`).update({
          favorites: firebase.firestore.FieldValue.arrayUnion(game)
        })
        // console.log(collection)
      } catch (error) {
        console.log(error)
      }
    } else {
      history.push('/login')
    }
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
            <span>R$ {game ? game.newValue : ''}</span>
          </div>
          <div className='game-box-text-description-content__button'>
            {payGame ?
            <ButtonGame  desactived={payGame}>
              ADQUIRIDO
            </ButtonGame> :
            <ButtonGame handleToCart={handleToCart}>
              COMPRE AGORA
            </ButtonGame>
            }
            <ButtonGameFavorites handleFavorited={handleFavorited} />
          </div>
        </div>
      </div>

      <div className='game-box-text-columns game-box-text-about' style={!expand ? {height: '50rem', overflow: 'hidden'} : {height: '100%'}}>
        <div className='game-box-text-about__title'>
          <h3 style={expand ? {position: 'sticky', top: '6.6rem'} : {}}>Sobre {game ? game.title : ''}</h3>
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

          <div className='game-box-text-about-content__desc' style={expand ? {height: '100%'} : {height: '50%'}}>
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

            <div className='game-box-text-about-content__button'>
              <div className={`game-box-text-about-content__button--shadow ${expand && 'invisible'}`}></div>
              <button onClick={handleExpand}>
                MOSTRAR MENOS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='game-box-text-columns game-box-text-rank'>
        <div className='game-box-text-rank__title'>
          <h3>Classificações</h3>
        </div>
        <div className='game-box-text-rank-content'>
          <div className='game-box-text-rank-content__rating'>
            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>99%</div>
              <span className='game-box-text-rank-content__rating--name'>Críticoa recomendam</span>
            </div>

            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>96</div>
              <span className='game-box-text-rank-content__rating--name'>Média dos principais críticos</span>
            </div>

            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>Poderoso</div>
              <span className='game-box-text-rank-content__rating--name'>Classificação OpenCritic</span>
            </div>
          </div>
          <div className='game-box-text-rank-content__all-avaliations'>
            <span>ver todas as avaliações</span>
            <BsBoxArrowInUpRight />
          </div>
          <div className='game-box-text-rank-content__cards'>
            <div className='game-box-text-rank-content__cards--card'>
              <div className='game-box-text-rank-content__cards--title'>
                <h3>PC Gamer</h3>
                <span>por Chris Thursten</span>
              </div>
              <div className='game-box-text-rank-content__cards--content'>
                <h3>92/100</h3>
                <p>
                  A sandbox of extraordinary scope created with a masterful attention to detail. A patchy campaign doesn't spoil this wonderful, evocative city.
                </p>
                <span>ler avaliação completa</span>
              </div>
            </div>

            <div className='game-box-text-rank-content__cards--card'>
              <div className='game-box-text-rank-content__cards--title'>
                <h3>IGN</h3>
                <span>por Dan Stapleton</span>
              </div>
              <div className='game-box-text-rank-content__cards--content'>
                <h3>10/10</h3>
                <p>
                  It's one of the best games available today.
                </p>
                <span>ler avaliação completa</span>
              </div>
            </div>

            <div className='game-box-text-rank-content__cards--card'>
              <div className='game-box-text-rank-content__cards--title'>
                <h3>Game Revolution</h3>
                <span>por Daniel Buischoff</span>
              </div>
              <div className='game-box-text-rank-content__cards--content'>
                <h3>5/5</h3>
                <p>
                  Grand Theft Auto V is one of the most expansive and impressive games I've ever played.
                </p>
                <span>ler avaliação completa</span>
              </div>
            </div>
          </div>
          <div className='game-box-text-rank-content__reviews'>
            <span>
              Avaliações fornecidas pela OpenCritic
            </span>
          </div>
        </div>
      </div>

      <div className='game-box-text-columns game-box-text-espec'>
        <div className='game-box-text-espec__title'>
          <h3>Especificações</h3>
        </div>

        <div className='game-box-text-espec-content'>
          <div className='game-box-text-espec-content__title'>
            <h3>windows</h3>
          </div>

          <div className='game-box-text-espec-content__requisitos'>
            <div className='game-box-text-espec-content__requisitos--content'>
              <h3>
                Minimo
              </h3>
              <div>
                <h3>
                  Sistema Operacional
                </h3>
                <p>
                  Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*placa de vídeo NVIDIA recomendada para o Vista)
                </p>
              </div>
              <div>
                <h3>
                  Processador
                </h3>
                <p>
                  Intel Core 2 Quad CPU Q6600 com 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) com 2.5 GHz
                </p>
              </div>
              <div>
                <h3>
                  Memória
                </h3>
                <p>
                  4 GB de RAM
                </p>
              </div>
              <div>
                <h3>
                Placa de Vídeo
                </h3>
                <p>
                NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)
                </p>
              </div>
              <div>
                <h3>
                Placa de Som
                </h3>
                <p>
                100% compatível com DirectX 10
                </p>
              </div>
              <div>
                <h3>
                Espaço em disco
                </h3>
                <p>
                90 GB available space
                </p>
              </div>
            </div>
            <div className='game-box-text-espec-content__requisitos--content'>
            <h3>
                Recomendado
              </h3>
              <div>
                <h3>
                  Sistema Operacional
                </h3>
                <p>
                Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
                </p>
              </div>
              <div>
                <h3>
                  Processador
                </h3>
                <p>
                Intel Core i5 3470 com 3.2GHZ (4 CPUs) / AMD X8 FX-8350 com 4GHZ (8 CPUs)
                </p>
              </div>
              <div>
                <h3>
                  Memória
                </h3>
                <p>
                8 GB de RAM
                </p>
              </div>
              <div>
                <h3>
                Placa de Vídeo
                </h3>
                <p>
                NVIDIA GTX 660 2GB / AMD HD7870 2GB
                </p>
              </div>
              <div>
                <h3>
                Placa de Som
                </h3>
                <p>
                100% compatível com DirectX 10
                </p>
              </div>
              <div>
                <h3>
                Espaço em disco
                </h3>
                <p>
                90 GB available space
                </p>
              </div>
            </div>
          </div>

          <div className='game-box-text-espec-content__politica'>
            <p>
              ©2008 - 2018 Rockstar Games, Inc. Rockstar Games, Grand Theft Auto, os logotipos GTA Cinco, GTA Online e o R* da Rockstar Games são marcas comerciais e/ou registradas da Take-Two Interactive Software, Inc. nos E.U.A e/ou outros países. Dolby e os símbolos duplo-D são marcas de Dolby Laboratories. Utiliza Bink Video. Copyright © 1997-2012 da RAD Game Tools, Inc. Tecnologia de captura de movimento euphoria motion synthesis da NaturalMotion. O código euphoria é (c) NaturalMotion 2008. "NaturalMotion", "euphoria" e os logotipos da NaturalMotion e euphoria são marcas da NaturalMotion. Usado sob licença. Este software inclui Autodesk® Scaleform®, © 2013 Autodesk, Inc. Todas as demais marcas e marcas registradas são propriedades dos seus respectivos donos. Todos os direitos reservados. Licença e termos de uso do software em www.rockstargames.com/eula?locale=br; termos de conta online em www.rockstargames.com/socialclub. Violação do EULA, Código de Conduta, ou demais políticas de uso poderão resultar na restrição ou cancelamento do acesso ao jogo ou à conta online. Para assistência técnica e ao cliente, visite www.rockstargames.com/support. Acesso intransferível para recursos como conteúdo exclusivo/desbloqueável/para download/online e serviços ou funções, tais como serviços de multijogador ou conteúdo bônus, podem exigir código de série único, pagamento de tarifa adicional e/ou cadastramento de conta (13+). Acesso a recursos especiais pode precisar de uma conexão com a internet, não estar disponível a todos os usuários e pode ser encerrado, modificado e/ou oferecido sob diferentes termos mediante um aviso prévio de 30 dias. É estritamente proibido fazer cópias não autorizadas, aplicar engenharia reversa, transmitir, apresentar publicamente, alugar, cobrar para jogar ou burlar a proteção contra cópias. O conteúdo deste jogo é puramente fictício e não tem a intenção de representar ou descrever nenhum evento, pessoa ou entidade real. Toda e qualquer semelhança é pura coincidência. Os desenvolvedores e editores deste jogo não apoiam, aceitam ou encorajam de modo algum a adoção dos comportamentos exibidos neste jogo. Rockstar Games, 622, Broadway, Nova Iorque, NY, 10012 T2 Take Two Interactive Para informações sobre os serviços online, tarifas e termos de licença de software que possam ser aplicados a este jogo, visite www.rockstargames.com.
            </p>
            <span>
              Politica de Privacidade
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default withRouter(GameBoxText)