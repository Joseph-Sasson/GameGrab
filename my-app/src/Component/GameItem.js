import React from 'react'

function GameItem ({game}){

  

  function handleClick(game){
    console.log(handleClick)
    return (game.name, game.type, game.runtime, game.ages, game.rules)
  }


  return(
  <div className="row" >

    <div key={game.id}>
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