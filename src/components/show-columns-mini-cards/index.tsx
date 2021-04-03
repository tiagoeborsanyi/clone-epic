// import { useState } from 'react'

import './show-columns-mini-cards.scss'
import {dataItems} from '../../dataItems'

import HeaderShowCards from '../header-show-cards'
import ColumnMiniCard from '../column-mini-card'
import MiniCard from '../mini-card'

const ShowColumnsMiniCards = () => {
  function arrayMiniCards (type: string): Array<Object> {
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
            <ColumnMiniCard title={column.title} show={column.show}>
              <MiniCard />
            </ColumnMiniCard>
          ))
        }
      </div>
    </div>
  )
}
export default ShowColumnsMiniCards