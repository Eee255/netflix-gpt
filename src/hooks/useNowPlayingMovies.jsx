import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utilities/moviesSlice"
import { OPTIONS } from "../utilities/constans"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()

  const nowPlaying = useSelector(store => store.movies.nowPlayingMovies)
        const getMoviesData = async () =>{
          const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?",OPTIONS)
      
          const json = await data.json()
         
          dispatch(addNowPlayingMovies(json.results))
        }
      
        useEffect(() =>{
         !nowPlaying && getMoviesData()
        },[])
}


export default useNowPlayingMovies