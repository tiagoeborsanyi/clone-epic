import './login.scss'

import SignUp from '../../components/login/signup'
import { useState } from 'react'

const Login: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false)
  console.log(rotate)

  return (
      <section className='login-section'>
      <div className='login'>
        <div className='login__side login__side--front' style={rotate ? {transform: 'rotateY(-180deg)'} : {}}>
          <SignUp rotateCard={() => setRotate(!rotate)} />
        </div>
        <div className='login__side login__side--back' style={rotate ? {transform: 'rotateY(0)'} : {}}>
          <div>
            algumas coisas escritas
            <button onClick={() => setRotate(!rotate)}>Cadastrar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login