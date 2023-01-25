import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
export default function Home () {
  return (
    <>
      <div className='img-container' />
      <main className='home-container'>
        <article className='text-container'>
          <h1>Todas las películas y series que desees, y mucho más.</h1>
          <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
          <Link to='/videos' className='generic-button'>Entrar</Link>
        </article>
      </main>
    </>
  )
}
