import React, { useState } from 'react'
import { SiEpicgames, AiOutlineInfoCircle } from 'react-icons/all'

import './signup.scss'

const SignUp = () => {
  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)

  const handleInputChanged = (e: any) => {
    console.log(e.target.value, e.target.value.length)
    setName(e.target.value)
    if (e.target.value.length === 0) {
      setRequired(true)
    } else {
      setRequired(false)
    }
  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form'>
        <div className='signup-form__block'>
          <input
            type="text"
            placeholder='*Nome de exibição'
            value={name}
            onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChanged(e)}
            style={required ? {backgroundColor: 'rgb(85,67,67)'} : {}}
          />
          <AiOutlineInfoCircle className='form-svg' />
          <span className='form-span' style={required ? {opacity: '1'} : {}}>necessário</span>
        </div>
      </form>
    </div>
  )
}

export default SignUp