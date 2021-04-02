import React from 'react'

import './homepage.scss'
import Carousel from '../../components/carousel'
import Card from '../../components/card'

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Homepage