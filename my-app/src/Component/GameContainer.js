import GameItem from './GameItem'
import React from 'react'
import GameFilter from './GameFilter'

function GameContainer ({games}){
  return(
    <div>
      <GameFilter />
        Collection of All Games 
        {
        games.map(game => (
          <GameItem key={game.id} game={game}/>
        ))}
    </div>
  )
}

export default GameContainer