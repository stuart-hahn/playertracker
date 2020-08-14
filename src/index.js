import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const players = [
  { id: 1, name: "slump", url: "twitch.tv/slumpcity" },
  { id: 2, name: "antcap24", url: "twitch.tv/antcap24" },
]

ReactDOM.render(<App players={players} />, document.getElementById('root'))