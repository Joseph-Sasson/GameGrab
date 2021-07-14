import Carousel from "./Carousel"
import GameItem from "./GameItem"

function GameWheel ({games}){


  // function arrayShuffler(start, end){
  //   if(start.length === 1){
  //     end.push(start[0])
  //     return end
  //   }else{
  //     const index = Math.floor(Math.random()*start.length)
  //     end.push(start[index])
  //     start.splice(index,1)
  //     return arrayShuffler(start, end)
  //   }
  // }

  // console.log(arrayShuffler(games, []))

  function arrayShuffler(start, end){
    while (start.length > 0){
      const index = Math.floor(Math.random() * start.length)
      end.push(start[index])
      start.splice(index, 1)
    }
    return end
  }
  console.log(arrayShuffler(games, []))

  return(
    <div style={{ maxWidth: 'auto', marginLeft: 200, marginRight: 100, marginTop: 5 }}>
      <Carousel show={5} infiniteLoop={true}>
          {games.map(game => (
            <GameItem key={game.id} game={game}/>
          ))}
      </Carousel>
    </div>
  )
}

export default GameWheel