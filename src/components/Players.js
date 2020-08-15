import React from 'react';
import Player from './Player'

const Players = ({ players }) => {

  if (players.length === 1) {
    return <Player player={players[0]} />
  }

  return (
    <div>
      {players.map(player => <li key={player.id}>{player.name}</li>)}
    </div>
  );
}

export default Players;
