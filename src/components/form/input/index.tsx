// import { InputHTMLAttributes } from 'react'
import React from 'react'
import { AiOutlineInfoCircle, BsEyeFill, BsEyeSlashFill, BsCheck } from 'react-icons/all'
import './input.scss'

interface IInputValues {
  required: boolean
  handleInputChanged:  (event: React.FormEvent<HTMLInputElement>) => void
  value?: string
  holder: string
  displayInfo?: boolean
  type?: string
  typeContent: string
  passwordView?: boolean
  passwordViewDisplay?: boolean
  changePassView?: (event: any) => void
}

export const Input: React.FC<IInputValues> = ({
  required, 
  handleInputChanged, 
  value, 
  holder, 
  displayInfo, 
  type, 
  typeContent, 
  passwordView, 
  passwordViewDisplay,
  changePassView 
}) => (
  <div className='signup-form__block'>
    <input
      className='signup-input__text'
      type={typeContent}
      value={value}
      placeholder={holder}
      style={required ? {backgroundColor: 'rgb(85,67,67)'} : {}}
      onChange={handleInputChanged}
      name={type}
    />
    {displayInfo && <AiOutlineInfoCircle className='form-svg' />}
    {passwordViewDisplay ? (passwordView ? <BsEyeSlashFill className='form-eye' onClick={changePassView} /> : <BsEyeFill className='form-eye' onClick={changePassView} />) : ''}
    <span className='form-span' style={required ? {opacity: '1', display: 'block'} : {}}>necessário</span>
  </div>
)

interface ICheckProps {
  changecheck: (event: React.FormEvent<HTMLInputElement>) => void
  check: boolean
}

export const Checkbox: React.FC<ICheckProps> = ({ children, check, changecheck }) => (
  <div className='signup-form__block signup-form__block--checkbox'>
    <input
      className='signup-input__checkbox'
      type='checkbox'
      name='emails'
      checked={check}
      onChange={changecheck}
    />
    {check && <BsCheck className='form-checkbox-tick' />}
    <label className='signup-input__checkbox--text'>{children}</label>
  </div>
)