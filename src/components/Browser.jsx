
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"

import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcommingMovies from "../hooks/useUpcommingMovies"
import useVideo from '../hooks/useVideo'
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import GptSearch from "./GptSearch"
const Browser = () => { 
  const gptSearch = useSelector((store) => store.gpt.gptState)


  const movieId = useParams()
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  useUpcommingMovies()
  useVideo(movieId)


  return (
    <div>
      <Header/>

      {
        gptSearch ? <GptSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
    </div>
  )
}

export default Browser