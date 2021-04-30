import { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import { Link } from 'react-router-dom'

import './signup.scss'
import { Input, Checkbox } from '../../form/input'

const SignUp = () => {
  const [formIsValid, setFormIsValid] = useState(false)
  const [user, setUser] = useState({
    firstName: {
      value: '',
      type: 'firstName',
      required: false
    },
    lastName: {
      value: '',
      type: 'lastName',
      required: false
    },
    displayName: {
      value: '',
      type: 'displayName',
      required: false
    },
    email: {
      value: '',
      type: 'email',
      required: false
    },
    password: {
      value: '',
      type: 'password',
      required: false
    }
  })

  const handleInputChanged = (e: any) => {
    const {name, value} = e.target
    const updateUser = {
      ...user,
      [name]: {
        type: name,
        value: value,
        required: value.length === 0 ? true : false
      }
    }
    const updateFormValid = Object.values(updateUser)
    const testRequired = updateFormValid.filter(el => el.required === true)
    console.log(testRequired) // se testRequired retornar com length maior que zero entao o botao desabilata caso contrario ele habilita para enviar os dados
    if (testRequired.length === 0) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
    setUser(updateUser)
  }

  const submitHandle = (e: any) => {
    e.preventDefault()
    console.log(user.email.value, user.password.value)
  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form' onSubmit={submitHandle}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '49%'}}>
            <Input 
              value={user['firstName'].value}
              type={user['firstName'].type}
              holder='*Nome'
              required={user['firstName'].required}
              handleInputChanged={handleInputChanged}
            />
          </div>
          <div style={{width: '49%'}}>
            <Input 
              value={user['lastName'].value}
              type={user['lastName'].type}
              holder='*Sobrenome'
              required={user['lastName'].required}
              handleInputChanged={handleInputChanged}
            />
          </div>
        </div>
        <Input 
          value={user['displayName'].value}
          type={user['displayName'].type}
          holder='*Nome de exibição'
          required={user['displayName'].required}
          displayInfo
          handleInputChanged={handleInputChanged}
        />
        <Input 
          value={user['email'].value}
          type={user['email'].type}
          holder='*Endereço de E-mail'
          required={user['email'].required}
          handleInputChanged={handleInputChanged}
        />
        <Input 
          value={user['password'].value}
          type={user['password'].type}
          holder='*Senha'
          required={user['password'].required}
          displayInfo
          handleInputChanged={handleInputChanged}
        />
        <Checkbox>
          Quero receber notícias, pesquisas e ofertas especiais da Epic Games.
        </Checkbox>
        <Checkbox>
          Eu li e concordo com termos de serviços.
        </Checkbox>
        <button type='submit' className={`login-button ${formIsValid && 'button-actived' }`}>
          CONTINUAR
        </button>
      </form>
      <p>
        Politica de Privacidade
      </p>
      <span>
        Possui uma conta da Epic Games? <Link to='/'>Entrar</Link>
      </span>
    </div>
  )
}

export default SignUp