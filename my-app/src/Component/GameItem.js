import React from 'react'

function GameItem ({game}){

  return(
  <div class="row" className="game rows">

    <div key={game.id}>
    <div class="column">
    <div className="image">
        <img alt="Don't play the blame game" src={game.image} />
    <div/>
    
    <div className="content">
      <div className="title">
        {game.name}
      </div>
      <button>
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