import React from 'react';
import Player from './Player'

const Players = ({ players, setPlayer }) => {

  if (players.length === 1) {
    return <Player player={players[0]} />
  }

  return (
    <div>
      {players.map(player => <li key={player.id}>{player.name} <button onClick={() => setPlayer(player.name)}>More Details</button></li>)}
    </div>
  );
}

export default Players;
