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
          transform: show ? 'translateY(8vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        
      </div>
    </>
  )
}

export default Modal