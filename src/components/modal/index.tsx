import { useState } from 'react'
import { BsInfoCircle, BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'

import './modal.scss'
import { firestore } from '../../firebase/firebase.utils'
import { useAuth } from '../../hooks/auth'
import Card from '../../assets/credit_card.png'
import Flash from '../../assets/flash.png'
import Paypal from '../../assets/paypal.png'
import Xsola from '../../assets/xsola.png'

interface IModalProps {
  show?: boolean
  modalClosed?: () => void
  game: any
}

type cardMethods = {
  card: boolean
  flash: boolean
  paypal: boolean
  itau: boolean
}

const Modal: React.FC<IModalProps> = ({ show, modalClosed, game }) => {
  const { userId } = useAuth()
  const [activeButton, setActiveButton] = useState<boolean>(false)
  const [checkout, setCheckout] = useState<boolean>(false)
  const [showMethod, setShowMethod] = useState<cardMethods>({
    card: false,
    flash: false,
    paypal: false,
    itau: false
  })

  const handleChoiceMethod = (tipo: string) => {
    const copy = {
      card: false,
      flash: false,
      paypal: false,
      itau: false
    }
    const t = Object.assign({}, copy, {[tipo]: true})
    setShowMethod(t)
    for (let k in t) {
      console.log(t[k])
      if (t[k]) {
        setActiveButton(true)
      }
    }
  }

  const handlePayGame = async () => {
    await firestore.doc(`users/${userId}`).update({
        biblioteca: firebase.firestore.FieldValue.arrayUnion(game)
      })
      .then(() => {
        console.log('adicionado com sucesso')
        setCheckout(true)
      })
      .catch(err => console.log(err))
  }



  return (
    <>
      {show && <div className='modal-backdrop' onClick={modalClosed}></div>}
      <div 
        className='modal'
        style={{
          transform: show ? 'translate(-50%, 5vh)' : 'translate(-50%, -200vh)',
          opacity: show ? '1' : '0'
        }}
      >
        <div className='modal-conteudo'>
          <div className='conteudo-header'>
            <div className={`conteudo-header__same conteudo-header__metodo ${!checkout && 'conteudo-header__checked'}`}>
              <button>
                m??todo de pagemto
              </button>
            </div>
            <div className={`conteudo-header__same conteudo-header__finaliza ${checkout && 'conteudo-header__checked'}`}>
              <button>
                finaliza compra
              </button>
            </div>
          </div>
          <div className='conteudo-pages'>
            <div className='conteudo-metodo'>
              <h3 className='conteudo-metodo__title'>escolher um m??todo de pagamento</h3>
              <form className='conteudo-form'>
                <div className='conteudo-form__geral'>
                  <div className='conteudo-form__block'>
                    <input type="radio" name='card' id='card' />
                    <label htmlFor='card' className='conteudo-form__block--label' onClick={() => handleChoiceMethod('card')}>
                      <img src={Card} alt='card1' />
                      <span>Credit Card</span>
                    </label>
                  </div>
                  <div className={`block-expand ${showMethod.card && 'expanded-selected'}`}>
                    <div className='block-expand__termos'>
                      <img src={Xsola} alt="xsola" />
                      <div className='block-expand__termos--text'>
                        <p>Pagamento baseado em Xsolla</p>
                        <span>Termos e condi????es</span>
                      </div>
                    </div>
                    <p className='block-expand__info'>
                      Voc?? ser?? redirecionado ao seu prestador de servi??o de pagamento para finalizar a compra.
                    </p>
                  </div>
                </div>

                <div className='conteudo-form__geral'>
                <div className='conteudo-form__block'>
                  <input type="radio" name='card' id='flash' />
                  <label htmlFor='flash' className='conteudo-form__block--label' onClick={() => handleChoiceMethod('flash')}>
                    <img src={Flash} alt='card1' />
                    <span>Boleto Flash</span>  
                  </label>
                </div>
                <div className={`block-expand ${showMethod.flash && 'expanded-selected'}`}>
                    <div className='block-expand__termos'>
                      <img src={Xsola} alt="xsola" />
                      <div className='block-expand__termos--text'>
                        <p>Pagamento baseado em Xsolla</p>
                        <span>Termos e condi????es</span>
                      </div>
                    </div>
                    <p className='block-expand__info'>
                      Voc?? ser?? redirecionado ao seu prestador de servi??o de pagamento para finalizar a compra.
                    </p>
                  </div>

                </div>

                <div className='conteudo-form__geral'>
                <div className='conteudo-form__block'>
                  <input type="radio" name='card' id='paypal' />
                  <label htmlFor='paypal' className='conteudo-form__block--label' onClick={() => handleChoiceMethod('paypal')}>
                    <img src={Paypal} alt='card1' />
                    <span>PayPal</span>
                  </label>
                </div>
                <div className={`block-expand ${showMethod.paypal && 'expanded-selected'}`}>
                    <div className='block-expand__termos'>
                      <img src={Xsola} alt="xsola" />
                      <div className='block-expand__termos--text'>
                        <p>Pagamento baseado em Xsolla</p>
                        <span>Termos e condi????es</span>
                      </div>
                    </div>
                    <p className='block-expand__info'>
                      Voc?? ser?? redirecionado ao seu prestador de servi??o de pagamento para finalizar a compra.
                    </p>
                  </div>

                </div>

                <div className='conteudo-form__geral'>
                <div className='conteudo-form__block'>
                  <input type="radio" name='card' id='itau' />
                  <label htmlFor='itau' className='conteudo-form__block--label' onClick={() => handleChoiceMethod('itau')}>
                    <img src={Card} alt='card1' />
                    <span>Banco Itau</span>
                  </label>
                </div>
                <div className={`block-expand ${showMethod.itau && 'expanded-selected'}`}>
                    <div className='block-expand__termos'>
                      <img src={Xsola} alt="xsola" />
                      <div className='block-expand__termos--text'>
                        <p>Pagamento baseado em Xsolla</p>
                        <span>Termos e condi????es</span>
                      </div>
                    </div>
                    <p className='block-expand__info'>
                      Voc?? ser?? redirecionado ao seu prestador de servi??o de pagamento para finalizar a compra.
                    </p>
                  </div>

                </div>

              </form>
            </div>

            <div
              className='conteudo-finaliza'
              style={checkout ? {} : {transform: 'translateX(-100vw)'}}
            >
              <h1>Obrigado por sua compra.</h1>
            </div>
          </div>
        </div>


        <div className='modal-resumo'>
          <div className='resume-title'>
            <h3>resumo do pedido</h3>
            <button className='resume-title__button' onClick={modalClosed}>
              <BsX />
            </button>
          </div>
          <div className='resume-content'>
            <div className='resume-content__image' style={game && {backgroundImage: `url(${game.urlImage})`}}></div>
            <div className='resume-content__values'>
              <h4 className='resume-content__values--title'>{game && game.title}</h4>
              <h5 className='resume-content__values--subtitle'>Por Snowman</h5>
              <ul className='resume-content__items'>
                <li className='resume-content__item'>
                  <p>Pre??o listado</p>
                  <span className='resume-oldvalue'>R$ {game && game.oldValue}</span>
                </li>
                <li className='resume-content__item'>
                  <p>Desconto</p>
                  <span className='resume-descount'>- R$ 9,86</span>
                </li>
                <li className='resume-content__item'>
                  <p>Pre??o</p>
                  <span>R$ {game && game.newValue}</span>
                </li>
              </ul>
              <div className='resume-content__line'></div>
              <ul className='resume-content__items'>
                <li className='resume-content__item'>
                  <p>Total</p>
                  <span>R$ {game && game.newValue}</span>
                </li>
                <li className='resume-content__item'>
                  <p className='resume-totalvalue'>Voc?? gasta</p>
                  <span>R$ {game && game.newValue}</span>
                </li>
              </ul>
              <div className='resume-content__line'></div>
              <form className='resume-form'>
                <div className='resume-form__block'>
                  <input className='resume-form__input' type="text" placeholder='INSIRA UMA TAG DE CRIADOR' />
                  <BsInfoCircle />
                </div>
                <div className='resume-form__block resume-form__checkbox'>
                  <input type="checkbox" />
                  <label>
                    Clique aqui para compartilhar seu e-mail com Snowman usar?? seu endere??o de e-mail de acordo com a <Link to='/'>politica de privacidade</Link> deles, por isso recomendamos que voc?? a leia.
                  </label>
                </div>
              </form>
              <div className='resume-politica'>
                <span>Precisa de ajuda?</span>
                <Link to='/'>Entrar em contato conosco</Link>
              </div>
            </div>
            { checkout ?
            <button onClick={modalClosed} className='inative-resume-checkout active-resume-checkout'>
              fechar
            </button> :
            <button
              disabled={!activeButton} 
              className={`inative-resume-checkout ${activeButton && 'active-resume-checkout'}`}
              onClick={handlePayGame}
            >
              fazer pedido
            </button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal