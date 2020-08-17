import React, { useState, useEffect } from 'react';

import playerServices from './services/players'

import Search from './components/Search'
import Players from './components/Players'

const App = () => {
  const [players, setPlayers] = useState([])
  const [term, setTerm] = useState('')

  let filteredPlayers = [...players]

  if (term) {
    filteredPlayers = players.filter(player => player.name.toLowerCase().includes(term.toLowerCase()))
  }

  useEffect(() => {
    playerServices
      .getAll()
      .then(initialPlayers => setPlayers(initialPlayers))
  }, [])

  const handleTermChange = event => setTerm(event.target.value)
  const setPlayer = player => setTerm(player)

  return (
    <div>
      <Search term={term} handleTermChange={handleTermChange} />
      <Players players={filteredPlayers} setPlayer={setPlayer} />
    </div>
  );
}

export default App;
