import React, { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'

import './signup.scss'
import { Input, Checkbox } from '../../form/input'

const SignUp = () => {
  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)

  const handleInputChanged = (e: any) => {
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
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '49%'}}>
            <Input 
              value={name}
              holder='*Nome'
              required={required}
              handleInputChanged={handleInputChanged}
            />
          </div>
          <div style={{width: '49%'}}>
            <Input 
              value={name}
              holder='*Sobrenome'
              required={required}
              handleInputChanged={handleInputChanged}
            />
          </div>
        </div>
        <Input 
          value={name}
          holder='*Nome de exibição'
          required={required}
          displayInfo
          handleInputChanged={handleInputChanged}
        />
        <Input 
          value={name}
          holder='*Endereço de E-mail'
          required={required}
          handleInputChanged={handleInputChanged}
        />
        <Input 
          value={name}
          holder='*Senha'
          required={required}
          displayInfo
          handleInputChanged={handleInputChanged}
        />
        <Checkbox>
          Quero receber notícias, pesquisas e ofertas especiais da Epic Games.
        </Checkbox>
        <Checkbox>
          Eu li e concordo com termos de serviços.
        </Checkbox>
        <button className='login-button'>
          CONTINUAR
        </button>
      </form>
      <p>
        Politica de Privacidade
      </p>
      <span>
        Possui uma conta da Epic Games? <a href='#'>Entrar</a>
      </span>
    </div>
  )
}

export default SignUp