import './App.css'
import Header from './components/ui/Header'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [query, setQuery] = useState('')

  const getQuery = q => {
    setQuery(q)
  }

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      )
      console.log(result.data)

      //call setItems function created using useState to set the data with the result.data we just obtained

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  // when using useEffect add dependencies as second argument
  // dependencies as query-- when query changes call the fetchItems or fire off useEffect

  return (
    <div className='container'>
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
