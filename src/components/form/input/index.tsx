// import { InputHTMLAttributes } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import './input.scss'

interface IInputValues {
  required: boolean
  handleInputChanged:  (event: React.FormEvent<HTMLInputElement>) => void
  value: string
  holder: string
  displayInfo?: boolean
}

const Input: React.FC<IInputValues> = ({ required, handleInputChanged, value, holder, displayInfo }) => (
  <div className='signup-form__block'>
    <input
      type="text"
      value={value}
      placeholder={holder}
      style={required ? {backgroundColor: 'rgb(85,67,67)'} : {}}
      onChange={handleInputChanged}
    />
    {displayInfo && <AiOutlineInfoCircle className='form-svg' />}
    <span className='form-span' style={required ? {opacity: '1'} : {}}>necessário</span>
  </div>
)

export default Input