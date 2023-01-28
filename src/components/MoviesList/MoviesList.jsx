import { useState, useEffect, useRef } from 'react'
import { API_BASE_URL, API_KEY } from '../../../configAPI'
import Movie from '../Movie/Movie'

export default function MoviesList ({ genre_id, name_genre }) {
  const [movies, setMovies] = useState([])
  const refList = useRef()
  useEffect(() => {
    fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}`)
      .then(res => res.json())
      .then(movies => {
        const { results } = movies
        setMovies(results)
      }
      )
  }, [])

  const handleNext = () => {
    refList.current.scrollLeft += refList.current.offsetWidth
  }
  const handleBack = () => {
    refList.current.scrollLeft -= refList.current.offsetWidth
  }
  return (
    <>
      <h1 className='genreTitle'>{name_genre}</h1>
      <div className='movies-list'>
        <button className='button-back' onClick={handleBack}><i className='fa-solid fa-arrow-left' /></button>

        <div className='carrousel' ref={refList}>
          {
        movies.map(movie => {
          const { id, original_title, poster_path } = movie
          return (
            <Movie
              key={id}
              id={id}
              title={original_title}
              poster={poster_path}
            />
          )
        })

    }
        </div>
        <button className='button-next' onClick={handleNext}><i className='fa-solid fa-arrow-right' /></button>

      </div>
    </>

  )
}
