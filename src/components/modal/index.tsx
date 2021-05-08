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
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal