import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import './signin.scss'

interface ISignUpProps extends RouteComponentProps {
  rotateCard?: (event: any) => void
}

const SignIn: React.FC<ISignUpProps> = ({ rotateCard }) => {
  return (
    <div>
      algumas coisas escritas
      <button onClick={rotateCard}>Cadastrar</button>
    </div>
  )
}

export default withRouter(SignIn)