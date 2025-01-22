import { useSelector } from "react-redux"
import TitleContainer from "./TitleContainer"
import MainVideo from "./MainVideo";


const MainContainer = () => {
    const movieData = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movieData) return null;
   
    let len = movieData.length;
    const randomNum = Math.round(Math.random() * len)
    const mainMovie = movieData[randomNum]
    if (!mainMovie) return null;
    const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[15%] bg-black md:pt-0 ">
        <TitleContainer  title={original_title} about={overview}/>
        <MainVideo movieId={id}/>
    </div>
  )
}

export default MainContainer