import { useEffect, useState } from 'react'
import MoviesList from '../../components/MoviesList/MoviesList'
import { API_GENRE_URL } from '../../../configAPI'
import '../../index.css'

export default function Movies () {
  const [genres, setGenres] = useState(null)
  useEffect(() => {
    fetch(API_GENRE_URL)
      .then(res => res.json())
      .then(resGenres => {
        const { genres } = resGenres
        setGenres(genres)
      }

      )
  }, [])

  return (
    <div className='movies-wrapper'>
      {
        genres &&
          Object.entries(genres).map(([_, value]) => {
            const { id, name } = value
            return <MoviesList key={id} genre_id={id} name_genre={name} />
          })
        }

    </div>
  )
}
