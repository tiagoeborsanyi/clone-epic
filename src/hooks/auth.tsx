import React, { createContext, useState, useContext } from 'react'
import { auth } from '../firebase/firebase.utils'

interface IAUthContext {
  logged: boolean
  signIn(email: string, password: string): void
  signUp(displayName: string, name: string, email: string, password: ''): void
  signOut(): void
}

const AuthContext = createContext<IAUthContext>({} as IAUthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(false)

  const signIn = (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user
        if (user) {
          setLogged(true)
        }
      })
      .catch(error => console.log(error))
  }

  const signUp = () => {

  }

  const signOut = () => {
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{logged, signIn, signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAUthContext {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }