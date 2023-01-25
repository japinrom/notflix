import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Navbar () {
  return (
    <header className='header'>
      <Link to='/'><img src={logo} alt='notflix' /></Link>
    </header>
  )
}
