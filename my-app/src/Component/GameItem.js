import React, { useEffect } from 'react'
import { useState } from 'react'

function GameItem ({game}){

  const [info, setInfo] = useState(false)

  const handleClick =()=>{
    setInfo(!info)
  }

  let displayInfo = info ? 
  <div>
      {/* <img src={game.image}/>
      <p>Name: {game.name}</p> */}
      <p>Type: {game.type}</p>
      <p>Age Limit: {game.ages}</p>
      <p>Min Players: {game["min players"]}</p>
      <p>Max Players: {game["max players"]}</p>
      <p>Play Time: {game.runtime}</p>
      <p>Rules: {game.rules}</p>
  </div>
  : false

  return(
  <div className='game rows'>

    <div>
    <div className="column">
    <div className="image">
        <img alt="Don't play the blame game" src={game.image} />
    <div/>
    
    <div className="content">
      <div className="title">
        {game.name}
      </div>
      {displayInfo}
      <button onClick={handleClick}>
        Learn More!
      </button>
    </div>
    </div>

    </div>
    </div>

  </div>    
  )
}

export default GameItem