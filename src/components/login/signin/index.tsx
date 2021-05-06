import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SiEpicgames } from 'react-icons/si'

import './signin.scss'

interface ISignUpProps extends RouteComponentProps {
  rotateCard?: (event: any) => void
}

const SignIn: React.FC<ISignUpProps> = ({ rotateCard }) => {
  return (
    <div className='signin'>
      <SiEpicgames />
      inputys
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