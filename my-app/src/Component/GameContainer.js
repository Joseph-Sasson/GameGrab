import GameItem from './GameItem'
import React from 'react'

function GameContainer ({games, click, remove}){
  return(
    <div>
      <h2>Collection of All Games</h2>
      {games.map(game => (
        <GameItem key={game.id} game={game} click={click} remove={remove}/>
      ))}
    </div>
  )
}

export default GameContainer