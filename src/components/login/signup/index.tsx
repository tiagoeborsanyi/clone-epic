import React, { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'

import './signup.scss'

const SignUp = () => {
  const [name, setName] = useState('')

  const handleInputChanged = (e: any) => {
    setName(e.target.value)
    console.log(e.target.value)
    console.log()
  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form'>
        <input
          type="text"
          placeholder='*Nome de exibição'
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChanged(e)}
        />
      </form>
    </div>
  )
}

export default SignUp