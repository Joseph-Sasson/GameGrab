import Carousel from "./Carousel"
import GameItem from "./GameItem"

function GameWheel ({games}){

  return(
    <div>
      <Carousel show={5} infiniteLoop={true}>
          {games.map(game => (
            <GameItem key={game.id} game={game}/>
          ))}
      </Carousel>
    </div>
  )
}

export default GameWheel