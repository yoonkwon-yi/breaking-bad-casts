import React from 'react'
import ChracterItem from './ChracterItem'
import Spinner from '../ui/Spinner'
const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map(item => (
        <ChracterItem key={item.char_id} item={item}></ChracterItem>
      ))}
      CharGrid
    </section>
  )
}

export default CharacterGrid
