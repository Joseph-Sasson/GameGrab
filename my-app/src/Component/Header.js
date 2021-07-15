import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header (){
  return(
    <ul className = 'head'>
    <NavLink exact to='/games' className='li'>Board Games</NavLink>
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