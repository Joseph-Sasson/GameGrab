import GameItem from './GameItem'
import React from 'react'

function GameContainer ({games}){
  return(
    <div>
      <h2>Games Collection</h2>
      {games.map(game => (
        <GameItem key={game.id} game={game}/>
      ))}
    </div>
  )
}

export default GameContainer