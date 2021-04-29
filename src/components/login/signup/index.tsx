import React, { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'

import './signup.scss'
import Input from '../../form/input'

const SignUp = () => {
  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)

  const handleInputChanged = (e: any) => {
    console.log('teste')
    console.log(e.target.value, e.target.value.length)
    setName(e.target.value)
    if (e.target.value.length === 0) {
      setRequired(true)
      console.log('verdade')
    } else {
      setRequired(false)
      console.log('false')
    }
  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form'>
        <Input 
          value={name}
          required={required}
          handleInputChanged={handleInputChanged}
        />
        {typeof required}
      </form>
    </div>
  )
}

export default SignUp