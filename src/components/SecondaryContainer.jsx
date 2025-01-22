
import MoviesList from './MoviesList'

import { useSelector } from "react-redux"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  return (
        <div className=" bg-black p-3 text-white">
          <div className='md:-mt-52'>
            <MoviesList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MoviesList title="Top Rated" movies={movies.topRatedMovies}/>
            <MoviesList title="Popular Movies" movies = {movies.popularMovies}/>
            <MoviesList title="UpComming" movies = {movies.upCommingMovies}/>
          </div>
        </div>
  )
}

export default SecondaryContainer