import { SiEpicgames } from 'react-icons/si'

import './signup.scss'

const SignUp = () => {
  const handleInputChanged = () => {

  }
  
  return (
    <div className='signup'>
      <SiEpicgames />
      <h3 className='signup-title'>cadastrar</h3>
      <form className='signup-form'>
        <input
          type="text"
          placeholder='*Nome de exibição'
          onChange={handleInputChanged}
        />
      </form>
    </div>
  )
}

export default SignUp