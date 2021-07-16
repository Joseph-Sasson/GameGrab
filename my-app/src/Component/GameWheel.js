import Carousel from "./Carousel"
import GameItem from "./GameItem"
import GameFilter from "./GameFilter"
import GameContainer from "./GameContainer"
import {useEffect, useState} from 'react'

function GameWheel ({games, click, remove}){

  const [allGames, setAllGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])
  const [shuffledGames, setShuffledGames] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res=>res.json())
    .then(setAllGames)
  },[])


  function filterGames(ourGames){
    setFilteredGames(ourGames)
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
    setShuffledGames(arrayShuffler(allGames,[]))
  },[allGames])

  return(
    <div style={{ maxWidth: 'auto', marginLeft: 200, marginRight: 100, marginTop: 5 }}>
      <Carousel show={6} infiniteLoop={true}>
          {shuffledGames.map(game => (
            <GameItem key={game.id} game={game} click={click} remove={remove}/>
          ))}
      </Carousel>
      <GameFilter filterGames={filterGames} games={shuffledGames} click={click} remove={remove}/>
      <GameContainer games={filteredGames} click={click} remove={remove}/>
    </div>
  )
}

export default GameWheel