import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './modal.scss'

interface IModalProps {
  show?: boolean
  modalClosed?: () => void
}

const Modal: React.FC<IModalProps> = ({ show, modalClosed }) => {
  return (
    <>
      {show && <div className='modal-backdrop' onClick={modalClosed}></div>}
      <div 
        className='modal'
        style={{
          transform: show ? 'translate(-50%, 5vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        <div className='modal-conteudo'></div>
        <div className='modal-resumo'>
          <div className='resume-title'>
            <h3>resumo do pedido</h3>
          </div>
          <div className='resume-content'>
            <div className='resume-content__image' style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/clone-epic.appspot.com/o/snow-runner.webp?alt=media)'}}></div>
            <div className='resume-content__values'>
              <h4 className='resume-content__values--title'>Skat City</h4>
              <h5 className='resume-content__values--subtitle'>Por Snowman</h5>
              <ul className='resume-content__items'>
                <li className='resume-content__item'>
                  <p>Preço listado</p>
                  <span className='resume-oldvalue'>R$ 28,99</span>
                </li>
                <li className='resume-content__item'>
                  <p>Desconto</p>
                  <span className='resume-descount'>- R$ 9,86</span>
                </li>
                <li className='resume-content__item'>
                  <p>Preço</p>
                  <span>R$ 19,13</span>
                </li>
              </ul>
              <div className='resume-content__line'></div>
              <ul className='resume-content__items'>
                <li className='resume-content__item'>
                  <p>Total</p>
                  <span>R$ 19,13</span>
                </li>
                <li className='resume-content__item'>
                  <p className='resume-totalvalue'>Você gasta</p>
                  <span>R$ 19,13</span>
                </li>
              </ul>
              <div className='resume-content__line'></div>
              <form className='resume-form'>
                <div className='resume-form__block'>
                  <input className='resume-form__input' type="text" />
                  <BsInfoCircle />
                </div>
                <div className='resume-form__block'>
                  <input type="checkbox" />
                  <label>
                    Clique aqui para compartilhar seu e-mail com Snowman usará seu endereço de e-mail de acordo com a politica de privacidade deles, por isso recomendamos que você a leia.
                  </label>
                </div>
              </form>
              <div>
                <span>Precisa de ajuda?</span>
                <Link to='/'>Entrar em contato conosco</Link>
              </div>
            </div>
            <button className='resume-checkout'>
              finalizar compra
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal