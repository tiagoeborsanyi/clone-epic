import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA7I_biHNk-31-4s86u_2f5bgRAiig16vo",
  authDomain: "clone-epic.firebaseapp.com",
  projectId: "clone-epic",
  storageBucket: "clone-epic.appspot.com",
  messagingSenderId: "35876699883",
  appId: "1:35876699883:web:2fdb21da32565ca1ab88ae",
  measurementId: "G-ZF74DM3SQK"
}

export const createUserProfileDocument = async (userAuth: any, additionalData: any): Promise<any> => {
  if (!userAuth) return;

  const useRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshopt = await useRef.get()

  if (!snapshopt.exists) {
    const { displayName, email } = userAuth
    // console.log(userAuth, additionalData)
    const createdAt = new Date()

    try {
      await useRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creationg user ', error.message)
    }
  }
  return useRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase