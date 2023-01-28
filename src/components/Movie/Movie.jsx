import React from 'react'
import '../../index.css'
const POSTER_URL = 'https://image.tmdb.org/t/p/original'

export default function Movie ({ id, title, poster }) {
  const movie_pic = `${POSTER_URL}/${poster}`
  return (
    <div className='movie'>

      <img loading='lazy' src={movie_pic} alt={id} />
    </div>
  )
}
