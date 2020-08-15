import React from 'react';

const Player = ({ player }) => {
  const record = `${player.wins} - ${player.losses}`
  return (
    <div>
      <h1>{player.name}</h1>
      <a href={player.url}>{player.url}</a>
      <p>Record: {record}</p>
      <p>Titles: {player.titles}</p>
    </div>
  )
}

export default Player;
