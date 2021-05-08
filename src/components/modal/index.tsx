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
        
          <div className='metodo-pagamento__titulo'>método de pagamento</div>
          <div className='metodo-pagamento__conteudo'>
            <h3>escolher um método de pagamento</h3>
            <div>
              conteudo
            </div>
          </div>


        
          <div className='finaliza-compra__titulo'>finalizar compra</div>
        
          <div className='resumo__titulo'>resumo pedido</div>
          <div className='resumo__conteudo'>
            <div className='resumo__conteudo--image' style={{backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/clone-epic.appspot.com/o/assassins-creed-valhala.webp?alt=media)`}}></div>
            <div className='resumo__conteudo--texto'>
              conteud de texto
            </div>
          </div>
      </div>
    </>
  )
}

export default Modal