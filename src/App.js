import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Player from './components/Player'

const App = (props) => {
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/players')
      .then(response => setPlayers(response.data))
  }, [])

  const addPlayer = event => {
    event.preventDefault()
    const playerObject = {
      id: players.length + 1,
      name: newPlayer,
      url: `twitch.tv/${newPlayer}`
    }

    setPlayers(players.concat(playerObject))
    setNewPlayer('')
  }

  const handlePlayerChange = (event) => setNewPlayer(event.target.value)

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map(player => <Player key={player.id} player={player} />)}
      </ul>
      <form onSubmit={addPlayer}>
        <input value={newPlayer} placeholder="create new player" onChange={handlePlayerChange} />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default App;
