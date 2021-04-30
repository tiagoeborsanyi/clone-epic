import { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import './signup.scss'
import { useAuth } from '../../../hooks/auth'
import { Input, Checkbox } from '../../form/input'

type propsTypesStates = {
  value: string,
  type: string,
  required: boolean,
  button: boolean
}
type UserState = {
  firstName: propsTypesStates,
  lastName: propsTypesStates,
  displayName: propsTypesStates,
  email: propsTypesStates
  password: propsTypesStates

}

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  const { signUp } = useAuth()

  const [formIsValid, setFormIsValid] = useState(false)
  const [user, setUser] = useState<UserState>({
    firstName: {
      value: '',
      type: 'firstName',
      required: false,
      button: true
    },
    lastName: {
      value: '',
      type: 'lastName',
      required: false,
      button: true
    },
    displayName: {
      value: '',
      type: 'displayName',
      required: false,
      button: true
    },
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
      signUp(user.email.value, user.password.value, history)
    }
  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form' onSubmit={submitHandle}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '49%'}}>
            <Input 
              typeContent='text'
              value={user['firstName'].value}
              type={user['firstName'].type}
              holder='*Nome'
              required={user['firstName'].required}
              handleInputChanged={handleInputChanged}
            />
          </div>
          <div style={{width: '49%'}}>
            <Input
              typeContent='text'
              value={user['lastName'].value}
              type={user['lastName'].type}
              holder='*Sobrenome'
              required={user['lastName'].required}
              handleInputChanged={handleInputChanged}
            />
          </div>
        </div>
        <Input
          typeContent='text'
          value={user['displayName'].value}
          type={user['displayName'].type}
          holder='*Nome de exibição'
          required={user['displayName'].required}
          displayInfo
          handleInputChanged={handleInputChanged}
        />
        <Input
          typeContent='email'
          value={user['email'].value}
          type={user['email'].type}
          holder='*Endereço de E-mail'
          required={user['email'].required}
          handleInputChanged={handleInputChanged}
        />
        <Input
          typeContent='password'
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

export default withRouter(SignUp)