import './login.scss'

import SignUp from '../../components/login/signup'

const Login: React.FC = () => {
  return (
      <section className='login-section'>
      <div className='login'>
        <div className='login__side login__side--front'>
          <SignUp />
        </div>
        <div className='login__side login__side--back'>
          <div>
            algumas coisas escritas
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login