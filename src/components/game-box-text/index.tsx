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
              O Grand Theft Auto V: Edi????o Premium inclui o Modo Hist??ria completo do Grand Theft Auto V, Grand Theft Auto Online e todo o conte??do e melhorias de jogo j?? lan??ados. Voc?? tamb??m recebe o Kit Inicial de Esquema Criminal
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
            <h3>Data de lan??amento</h3>
            <span>17 de set. de 2013</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Tags</h3>
            <span>A????o, Aventura</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Classifica????o</h3>
            <span>-</span>
          </div>

          <div className='game-box-text-about-content__box'>
            <h3>Plataforma</h3>
            <span>-</span>
          </div>

          <div className='game-box-text-about-content__desc' style={expand ? {height: '100%'} : {height: '50%'}}>
            <div>
              <h3>Grand Theft Auto V: Edi????o Premium</h3>
              <p>
                O Grand Theft Auto V: O Grand Theft Auto V: Edi????o Premium inclui o Modo Hist??ria completo do Grand Theft Auto V, acesso gratuito ao mundo em constante evolu????o do Grand Theft Auto Online e todo o conte??do e melhorias de jogo j?? lan??ados, incluindo O Golpe do Ju??zo Final, Tr??fico de Armas, Acima da Lei, Motoqueiros e muito mais. Voc?? recebe o Kit Inicial de Esquema Criminal, a maneira mais r??pida de come??ar seu imp??rio do crime no Grand Theft Auto Online.
              </p>
              <h3>GRAND THEFT AUTO V</h3>
              <p>
                Quando um malandro de rua, um ladr??o de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma s??rie de golpes ousados para sobreviver em uma cidade onde n??o podem confiar em ningu??m, nem mesmo um no outro.
              </p>
              <h3>GRAND THEFT AUTO ONLINE</h3>
              <p>
                Descubra um mundo de escolhas e maneiras de jogar ?? medida em que voc?? sobe na hierarquia do crime de Los Santos e Blaine County na experi??ncia online definitiva.
              </p>
              <h3>KIT INICIAL DE ESQUEMA CRIMINAL</h3>
              <p>
                O Kit Inicial de Esquema Criminal ?? a maneira mais r??pida dos jogadores do GTA Online darem o pontap?? inicial no seu pr??prio imp??rio do crime com o conte??do mais popular e divertido dispon??vel e com b??nus de GTA$1.000.000 para gastar no GTA Online (o conte??do inteiro vale mais de GTA$ 10.000.000 se comprado separadamente).
              </p>
              <h3>INICIE O SEU IMP??RIO DO CRIME</h3>
              <p>
                Inicie neg??cios por meio do seu Escrit??rio Executivo do Maze Bank West, pesquise tecnologias de armas poderosas no seu Bunker de Tr??fico de Armas subterr??neo e use a sua f??brica de dinheiro falso para iniciar opera????es de falsifica????o bem lucrativas.
              </p>
              <h3>UMA FROTA DE VE??CULOS PODEROSOS</h3>
              <p>
                Saia rasgando pelas ruas com uma s??rie de 10 ve??culos de alto desempenho, incluindo um supercarro, motocicletas, o Dune de Combate armado, um helic??ptero, um carro de rally e mais. Voc?? tamb??m ir?? adquirir propriedades, incluindo uma garagem para 10 carros para guardar a sua crescente frota.
              </p>
              <h3>ARMAS, ROUPAS E TATUAGENS</h3>
              <p>
                Voc?? tamb??m ter?? acesso ao Lan??a-granada Compacto, Rifle de Elite e o Fuzil Compacto, al??m de trajes de Corridas Acrob??ticas, tatuagens de motoqueiro e mais.
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
          <h3>Classifica????es</h3>
        </div>
        <div className='game-box-text-rank-content'>
          <div className='game-box-text-rank-content__rating'>
            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>99%</div>
              <span className='game-box-text-rank-content__rating--name'>Cr??ticoa recomendam</span>
            </div>

            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>96</div>
              <span className='game-box-text-rank-content__rating--name'>M??dia dos principais cr??ticos</span>
            </div>

            <div className='game-box-text-rank-content__rating--card'>
              <div className='game-box-text-rank-content__rating--percent'>Poderoso</div>
              <span className='game-box-text-rank-content__rating--name'>Classifica????o OpenCritic</span>
            </div>
          </div>
          <div className='game-box-text-rank-content__all-avaliations'>
            <span>ver todas as avalia????es</span>
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
                <span>ler avalia????o completa</span>
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
                <span>ler avalia????o completa</span>
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
                <span>ler avalia????o completa</span>
              </div>
            </div>
          </div>
          <div className='game-box-text-rank-content__reviews'>
            <span>
              Avalia????es fornecidas pela OpenCritic
            </span>
          </div>
        </div>
      </div>

      <div className='game-box-text-columns game-box-text-espec'>
        <div className='game-box-text-espec__title'>
          <h3>Especifica????es</h3>
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
                  Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*placa de v??deo NVIDIA recomendada para o Vista)
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
                  Mem??ria
                </h3>
                <p>
                  4 GB de RAM
                </p>
              </div>
              <div>
                <h3>
                Placa de V??deo
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
                100% compat??vel com DirectX 10
                </p>
              </div>
              <div>
                <h3>
                Espa??o em disco
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
                  Mem??ria
                </h3>
                <p>
                8 GB de RAM
                </p>
              </div>
              <div>
                <h3>
                Placa de V??deo
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
                100% compat??vel com DirectX 10
                </p>
              </div>
              <div>
                <h3>
                Espa??o em disco
                </h3>
                <p>
                90 GB available space
                </p>
              </div>
            </div>
          </div>

          <div className='game-box-text-espec-content__politica'>
            <p>
              ??2008 - 2018 Rockstar Games, Inc. Rockstar Games, Grand Theft Auto, os logotipos GTA Cinco, GTA Online e o R* da Rockstar Games s??o marcas comerciais e/ou registradas da Take-Two Interactive Software, Inc. nos E.U.A e/ou outros pa??ses. Dolby e os s??mbolos duplo-D s??o marcas de Dolby Laboratories. Utiliza Bink Video. Copyright ?? 1997-2012 da RAD Game Tools, Inc. Tecnologia de captura de movimento euphoria motion synthesis da NaturalMotion. O c??digo euphoria ?? (c) NaturalMotion 2008. "NaturalMotion", "euphoria" e os logotipos da NaturalMotion e euphoria s??o marcas da NaturalMotion. Usado sob licen??a. Este software inclui Autodesk?? Scaleform??, ?? 2013 Autodesk, Inc. Todas as demais marcas e marcas registradas s??o propriedades dos seus respectivos donos. Todos os direitos reservados. Licen??a e termos de uso do software em www.rockstargames.com/eula?locale=br; termos de conta online em www.rockstargames.com/socialclub. Viola????o do EULA, C??digo de Conduta, ou demais pol??ticas de uso poder??o resultar na restri????o ou cancelamento do acesso ao jogo ou ?? conta online. Para assist??ncia t??cnica e ao cliente, visite www.rockstargames.com/support. Acesso intransfer??vel para recursos como conte??do exclusivo/desbloque??vel/para download/online e servi??os ou fun????es, tais como servi??os de multijogador ou conte??do b??nus, podem exigir c??digo de s??rie ??nico, pagamento de tarifa adicional e/ou cadastramento de conta (13+). Acesso a recursos especiais pode precisar de uma conex??o com a internet, n??o estar dispon??vel a todos os usu??rios e pode ser encerrado, modificado e/ou oferecido sob diferentes termos mediante um aviso pr??vio de 30 dias. ?? estritamente proibido fazer c??pias n??o autorizadas, aplicar engenharia reversa, transmitir, apresentar publicamente, alugar, cobrar para jogar ou burlar a prote????o contra c??pias. O conte??do deste jogo ?? puramente fict??cio e n??o tem a inten????o de representar ou descrever nenhum evento, pessoa ou entidade real. Toda e qualquer semelhan??a ?? pura coincid??ncia. Os desenvolvedores e editores deste jogo n??o apoiam, aceitam ou encorajam de modo algum a ado????o dos comportamentos exibidos neste jogo. Rockstar Games, 622, Broadway, Nova Iorque, NY, 10012 T2 Take Two Interactive Para informa????es sobre os servi??os online, tarifas e termos de licen??a de software que possam ser aplicados a este jogo, visite www.rockstargames.com.
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