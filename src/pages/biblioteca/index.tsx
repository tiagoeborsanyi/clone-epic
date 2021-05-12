import { useEffect, useState } from 'react'

import { useAuth } from '../../hooks/auth'
import { firestore } from '../../firebase/firebase.utils'
import './biblioteca.scss'
import Card from '../../components/card'

const Biblioteca: React.FC = () => {
  const { userId } = useAuth()
  const [games, setGames] = useState<any>()

  useEffect(() => {
    async function efeito () {
      await firestore.doc(`users/${userId}`).get().then(doc => {
        console.log(doc.data())
        setGames(doc.data())
      })
    }
    if (userId) {
      efeito()
    }
  }, [userId])

  let comp;
  if (games) {
    console.log('teste', games.biblioteca)
    comp = (
      <div className='show-cards-biblioteca'>
        {
          games.biblioteca.map((card: any) => (
              <Card 
                key={card.id}
                urlImg={card.urlImage}
                otherProps={card}
              />
          ))
        }
      </div>
    )
  }
  

  return (
    <>
      {comp}
    </>
  )
}

export default Biblioteca