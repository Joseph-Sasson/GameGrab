import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
// import {Route, Switch} from 'react-router-dom'
import Header from './Component/Header';
import GameContainer from './Component/GameContainer'

function App() {

  const [games, setGames] =useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
    .then(res=>res.json())
    .then(setGames)
  },[])

  return (
    <div className="App">
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
