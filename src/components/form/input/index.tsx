// import { InputHTMLAttributes } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import './input.scss'

interface IInputValues {
  required: boolean
  handleInputChanged:  (event: React.FormEvent<HTMLInputElement>) => void
  value: string
}

const Input: React.FC<IInputValues> = ({ required, handleInputChanged, value }) => (
  <div>
    <div className='signup-form__block'>
      <input
        type="text"
        value={value}
        placeholder='*Nome de exibição'
        style={required ? {backgroundColor: 'rgb(85,67,67)'} : {}}
        onChange={handleInputChanged}
      />
      texto {typeof required}
      <AiOutlineInfoCircle className='form-svg' />
      <span className='form-span' style={required ? {opacity: '1'} : {}}>necessário</span>
    </div>
  </div>
)

export default Input