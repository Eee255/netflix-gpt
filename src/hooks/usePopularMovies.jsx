import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utilities/moviesSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utilities/constans"



const usePopularMovies = () => {
    const dispatch = useDispatch()

  const nowPlaying = useSelector(store => store.movies.popularMovies)
        const getMoviesData = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS)
      
          const json = await data.json()
         
          dispatch(addPopularMovies(json.results))
        }
      
        useEffect(() =>{
         !nowPlaying && getMoviesData()
        },[])
}

export default usePopularMovies