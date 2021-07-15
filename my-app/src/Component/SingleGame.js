import {useHistory} from 'react-router-dom'


function SingleGame(){

  let history = useHistory()

  const game = history.location.state

  const goBack = ()=>{
    history.goBack()
  }

  return(
  <div>
      <img src={game.image} alt=''/>
      <p>Name: {game.name}</p>
      <p>Type: {game.type}</p>
      <p>Age Limit: {game.ages}</p>
      <p>Min Players: {game["min players"]}</p>
      <p>Max Players: {game["max players"]}</p>
      <p>Play Time: {game.runtime}</p>
      <p>Rules: {game.rules}</p>
      <button onClick={goBack}>Return To Home</button>
  </div>
)}

export default SingleGame