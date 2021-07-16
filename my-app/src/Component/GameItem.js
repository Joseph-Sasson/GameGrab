import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


function GameItem ({game, click, remove}){

  const [button, setButton] = useState(false)

  let history = useHistory()

  const handleClick =()=>{
    history.push("/singlegame", game)
  }

  const handleButton = ()=>{
    setButton(!button)
  }

  const myGame = button ? <button onClick={()=>remove(game)}>Remove Game</button> : <button onClick={()=>click(game)}>Save Game</button>

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
      <div onClick={handleButton}>
        {myGame}
      </div>
    </div>
    </div>

    </div>
    </div>
  </div>    
  )
}

export default GameItem