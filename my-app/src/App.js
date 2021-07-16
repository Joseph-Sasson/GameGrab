import './CSS/App.css';
import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './Component/Header';
import GameContainer from './Component/GameContainer'
import GameWheel from './Component/GameWheel'
import SingleGame from './Component/SingleGame';

function App() {

  const [allGames, setAllGames] = useState([])
  const [myGames, setMyGames] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res=>res.json())
    .then(setAllGames)
  },[])

  const games = allGames.map(game=>{return game})

  const boardGames = allGames.filter(game=>game.type === 'Board Game')

  const cardGames = allGames.filter(game=>game.type === 'Card Game')

  const save = (game)=>{
    if (!myGames.includes(game)){
      const newMyGames = [...myGames, game]
      setMyGames(newMyGames)
    }
  }

  const remove = (game)=>{
   const newMyGames = [...myGames].filter(myGame=>game.id !== myGame.id)
   setMyGames(newMyGames)
  }

  return (
    <div className="App">
      <Header />

      <Switch>
          <Route path='/savedgames' component={()=><GameContainer games={myGames} click={save} remove={remove}/>}/>
          <Route path='/boardgames' component={()=><GameContainer games={boardGames} click={save} remove={remove}/>}/>
          <Route path='/singlegame' component={()=><SingleGame games={games} click={save} remove={remove}/>} />
          <Route path='/cardgames' component={()=><GameContainer games={cardGames} click={save} remove={remove}/>}/>
          <Route exact path='/' component={()=><GameWheel games={games} click={save} remove={remove}/>} />
      </Switch>
    </div>
  );
}

export default App;