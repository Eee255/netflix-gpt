import { useDispatch, useSelector } from "react-redux"
import {  addTopRatedMovies } from "../utilities/moviesSlice"
import { OPTIONS } from "../utilities/constans"
import { useEffect } from "react"

const useTopRatedMovies = () => {
  const dispatch = useDispatch()

  const nowPlaying = useSelector(store => store.movies.topRatedMovies)
        const getMoviesData = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS)
      
          const json = await data.json()
          dispatch(addTopRatedMovies(json.results))
        }
      
        useEffect(() =>{
         !nowPlaying && getMoviesData()
        },[])
}


export default useTopRatedMovies