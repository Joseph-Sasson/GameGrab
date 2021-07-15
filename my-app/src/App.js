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

  return (
    <div className="App">
      <Header />

      <Switch>
          <Route path='/savedgames' component={()=><GameContainer games={allGames}/>}/>
          <Route path='/boardgames' component={()=><GameContainer games={allGames}/>}/>
          <Route path='/cardgames' component={()=><GameContainer games={allGames}/>}/>
          <Route exact path='/' component={()=><GameWheel games={allGames}/>} />
      </Switch>
    </div>
  );
}

export default App;