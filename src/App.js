import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    axios.get('http://localhost:3001/players')
      .then(response => setPlayers(response.data))
  }, [])

  const handleTermChange = event => setTerm(event.target.value)

  return (
    <div>
      <Search term={term} handleTermChange={handleTermChange} />
      <Players players={filteredPlayers} />
    </div>
  );
}

export default App;
