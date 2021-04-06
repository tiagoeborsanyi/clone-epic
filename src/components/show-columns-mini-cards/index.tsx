// import { useState } from 'react'

import './show-columns-mini-cards.scss'
import {dataItems} from '../../dataItems'

import HeaderShowCards from '../header-show-cards'
import ColumnMiniCard from '../column-mini-card'
import MiniCard from '../mini-card'

const ShowColumnsMiniCards = () => {
  function arrayMiniCards (type: string): Array<any> {
    return dataItems.filter(item => item.tags.find(el => el === type))
  }

  const arrColumn = [
    {
      id: 1,
      title: 'Novos Lançamentos',
      show: false,
      textLink: '',
      cards: arrayMiniCards('+sold')
    },
    {
      id: 2,
      title: 'Mais Vendidos',
      show: true,
      textLink: 'VER MAIS',
      cards: arrayMiniCards('releases')
    },
    {
      id: 3,
      title: 'Em breve',
      show: false,
      textLink: '',
      cards: arrayMiniCards('coming')
    },
  ]
  
  return (
    <div className='show-columns-mini-cards'>
      <HeaderShowCards title='Novos e populares' />
      <div className='columns-mini-card'>
        {
          arrColumn.map(column => (
            <ColumnMiniCard 
              key={column.id}
              title={column.title} 
              show={column.show}
            >
              {
                column.cards.map(item => (
                  <MiniCard 
                    key={item.id + Math.random()}
                    title={item.title}
                    percent={item.discount}
                    oldValue={item.oldValue}
                    newValue={item.newValue}
                    urlImg={item.urlImage}
                  />
                ))
              }
            </ColumnMiniCard>
          ))
        }
      </div>
    </div>
  )
}
export default ShowColumnsMiniCards