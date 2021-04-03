import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {

}

export const createUserProfileDocument = async (userAuth: any, additionalData: any): Promise<any> => {
  if (!userAuth) return;

  const useRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshopt = await useRef.get()

  if (!snapshopt.exists) {
    const { displayName, email } = userAuth
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