import React from 'react'

import './homepage.scss'
import Carousel from '../../components/carousel'
import Card from '../../components/card'

import {dataItems} from '../../dataItems'

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {
          dataItems.map(card => (
            <>
              <Card urlImg={card.urlImage} />
            </>
          ))
        }
        
      </div>
    </div>
  )
}

export default Homepage