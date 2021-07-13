import GameItem from './GameItem'
import React from 'react'
import GameFilter from './GameFilter'

function GameContainer ({games}){
  return(
    <div>
      
        Game Filter
        <GameFilter />
      
      <div>
        Collection of All Games 
        {
        games.map(game => (
          <GameItem game={game}/>
        ))}
        
        
      </div>
    </div>
  )
}

export default GameContainer