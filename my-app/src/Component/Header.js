import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header (){
  return(
    <ul className = 'head'>
    <NavLink exact to='/boardgames' className='li'>Board Games</NavLink>
    <NavLink exact to='/cardgames' className='li'>Card Games</NavLink>
    <Link to='/' className='header'>This is Our Game Title</Link>
    <NavLink exact to='/savedgames' className='li'>Saved Games</NavLink>
    <form>
        <input type='text' placeholder='Search Game...' />
        <button type='submit'>Search</button>
      </form>
  </ul>

  )
}

export default Header


// return(
//   <ul className = 'header'>
//     <li><a href="#BoardGames">Board Games</a></li>
//     <li><a href="#CardGames">Card Games</a></li>
//     <li><a href="#home" className='title'>This is Our Game Title</a></li>
//     <li><a href="#Saved">Saved Games</a></li>
//     <form>
//       <input type='text' placeholder='Search Game...' />
//       <button type='submit'>Search</button>
//     </form>
//   </ul>
// )