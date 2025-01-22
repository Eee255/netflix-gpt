/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import useMainVideo from "../hooks/useMainVideo"


const MainVideo = ({movieId}) => {
    const viedoKey = useSelector(store => store.movies.trailerVideos)
    useMainVideo(movieId)
  return (
    <div className="w-screen">
       <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + viedoKey?.key + "?&autoplay=1&mute=1&controls=0&rel=0&loop=1" } 
        title="YouTube video player" frameBorder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default MainVideo