import React, { createContext, useState, useContext } from 'react'

interface IAUthContext {
  logged: boolean
  signIn(email: string, password: string): void
  signOut(): void
}

const AuthContext = createContext<IAUthContext>({} as IAUthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(false)

  const signIn = (email: string, password: string) => {
    setLogged(true)
  }

  const signOut = () => {
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{logged, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAUthContext {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }