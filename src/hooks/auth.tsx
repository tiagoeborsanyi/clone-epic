import React, { createContext, useState, useContext } from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

interface IAUthContext {
  logged: boolean
  displayName: string
  userId: string
  signIn(email: string, password: string, history: any): void
  signUp(email: string, password: string, history: any, displayNameParam: string, name?: string): void
  signOut(): void
}

const AuthContext = createContext<IAUthContext>({} as IAUthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    return !!localStorage.getItem('@clone-epic:logged')
  })
  const [displayName, setDisplayName] = useState<string>(() => {
    return localStorage.getItem('@clone-epic:name') || ''
  })
  const [userId, setUserId] = useState<string>(() => {
    return localStorage.getItem('@clone-epic:userid') || ''
  })

  const signIn = (email: string, password: string, history: any) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user
        if (user) {
          // console.log(user)
          setLogged(true)
          setDisplayName(email.split('@')[0])
          localStorage.setItem('@clone-epic:logged', 'true');
          localStorage.setItem('@clone-epic:name', email.split('@')[0])
          localStorage.setItem('@clone-epic:userid', user.uid)
          setUserId(user.uid)
          history.goBack()
        }
      })
      .catch(error => console.log(error))
  }

  const signUp = async (email: string, password: string, history: any, displayNameParam: string, name?: string) => {
    
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password)
      // console.log(user)
      if (user) {
        await createUserProfileDocument(user.user, { displayName: displayNameParam, name })
        setLogged(true)
        localStorage.setItem('@clone-epic:logged', 'true');
        localStorage.setItem('@clone-epic:name', displayNameParam)
        const copyId = user.user ? user.user.uid : ''
        localStorage.setItem('@clone-epic:userid', copyId)
        setUserId(copyId)
        setDisplayName(displayNameParam)
        history.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => {
    setLogged(false)
    setUserId('')
    localStorage.removeItem('@clone-epic:logged');
    localStorage.removeItem('@clone-epic:name');
    localStorage.removeItem('@clone-epic:userid');
  }

  return (
    <AuthContext.Provider value={{logged, displayName, userId, signIn, signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAUthContext {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }