import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SiEpicgames } from 'react-icons/si'

import './signin.scss'
import { Input } from '../../form/input'

type propsTypesStates = {
  value: string,
  type: string,
  required: boolean,
  button: boolean
}
type UserState = {
  email: propsTypesStates
  password: propsTypesStates

}

interface ISignUpProps extends RouteComponentProps {
  rotateCard?: (event: any) => void
}

const SignIn: React.FC<ISignUpProps> = ({ rotateCard }) => {
  const [viewPass, setViewPass] = useState(true)
  const [formIsValid, setFormIsValid] = useState(false)
  const [user, setUser] = useState<UserState>({
    email: {
      value: '',
      type: 'email',
      required: false,
      button: true
    },
    password: {
      value: '',
      type: 'password',
      required: false,
      button: true
    }
  })

  const handleInputChanged = (e: any) => {
    const {name, value} = e.target
    const updateUser = {
      ...user,
      [name]: {
        type: name,
        value: value,
        required: value.length === 0 ? true : false,
        button: !value.length
      }
    }
    const testRequired = Object.values(updateUser).filter(el => el.button === true)
    if (testRequired.length === 0) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
    setUser(updateUser)
  }

  const submitHandle = (e: any) => {
    e.preventDefault()
    if (user.email.value) {
      
    }
  }

  return (
    <div className='signin'>
      <SiEpicgames />
      <h3 className='signup-title'>FAZER LOGIN COM UMA CONTA DA EPIC GAMES</h3>
      <form className='signup-form' onSubmit={submitHandle}>
        <Input
          typeContent='email'
          value={user['email'].value}
          type={user['email'].type}
          holder='*Endereço de E-mail'
          required={user['email'].required}
          handleInputChanged={handleInputChanged}
        />
        <Input
          typeContent={viewPass ? 'password' : 'text'}
          value={user['password'].value}
          type={user['password'].type}
          holder='*Senha'
          required={user['password'].required}
          displayInfo
          passwordViewDisplay
          passwordView={viewPass}
          changePassView={() => setViewPass(!viewPass)}
          handleInputChanged={handleInputChanged}
        />
        <button type='submit' className={`login-button ${formIsValid && 'button-actived' }`}>
          CONTINUAR
        </button>
      </form>
      <p>
        Politica de Privacidade
      </p>
      <span>
        Não possui uma conta da Epic Games? <button className='button-for-signin' onClick={rotateCard}>Cadastrar</button>
      </span>
    </div>
  )
}

export default withRouter(SignIn)