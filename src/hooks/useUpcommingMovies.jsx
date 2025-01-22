import { useDispatch, useSelector } from "react-redux"
import { OPTIONS } from "../utilities/constans"
import { addUpCommingMovies } from "../utilities/moviesSlice"
import { useEffect } from "react"


const useUpcommingMovies = () => {
    const dispatch = useDispatch()

  const nowPlaying = useSelector(store => store.movies.upCommingMovies)
        const getMoviesData = async () =>{
          const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)
      
          const json = await data.json()
         
          dispatch(addUpCommingMovies(json.results))
        }
      
        useEffect(() =>{
         !nowPlaying && getMoviesData()
        },[])
}

export default useUpcommingMovies
