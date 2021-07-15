import React from 'react'
import { useHistory } from "react-router-dom";


function GameItem ({game}){

  let history = useHistory()

  const handleClick =()=>{
    history.push("/singlegame", game)
  }

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