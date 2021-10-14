import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = q => {
    setText(q)
    getQuery(q)
  }

  return (
    <text className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          autoFocus
          value={text}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </text>
  )
}

export default Search
