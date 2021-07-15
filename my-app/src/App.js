import './CSS/App.css';
import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './Component/Header';
import GameContainer from './Component/GameContainer'
import GameWheel from './Component/GameWheel'

function App() {

  const [allGames, setAllGames] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res=>res.json())
    .then(setAllGames)
  },[])

  const games = allGames.map(game=>{return game})

  const boardGames = allGames.filter(game=>game.type === 'Board Game')

  const cardGames = allGames.filter(game=>game.type === 'Card Game')

  return (
    <div className="App">
      <Header />

      <Switch>
          <Route path='/savedgames' component={()=><GameContainer games={allGames}/>}/>
          <Route path='/boardgames' component={()=><GameContainer games={boardGames}/>}/>
          <Route path='/cardgames' component={()=><GameContainer games={cardGames}/>}/>
          <Route exact path='/' component={()=><GameWheel games={games}/>} />
      </Switch>
    </div>
  );
}

export default App;