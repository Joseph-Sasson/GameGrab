import Carousel from "./Carousel"
import GameItem from "./GameItem"
import GameFilter from "./GameFilter"
import GameContainer from "./GameContainer"
import {useEffect, useState} from 'react'

function GameWheel ({games}){

  const [filteredGames, setFilteredGames] = useState([])
  const [shuffledGames, setShuffledGames] = useState([])

  function filterGames(games){
    setFilteredGames(games)
  }

  function arrayShuffler(start, end){
    while (start.length > 0){
      const index = Math.floor(Math.random() * start.length)
      end.push(start[index])
      start.splice(index, 1)
    }
    return end
  }

  useEffect(()=>{
    setShuffledGames(arrayShuffler(games,[]))
  },[games])

  return(
    <div style={{ maxWidth: 'auto', marginLeft: 200, marginRight: 100, marginTop: 5 }}>
      <Carousel show={5} infiniteLoop={true}>
          {shuffledGames.map(game => (
            <GameItem key={game.id} game={game}/>
          ))}
      </Carousel>
      <GameFilter filterGames={filterGames} games={games}/>
      <GameContainer games={filteredGames}/>
    </div>
  )
}

export default GameWheel