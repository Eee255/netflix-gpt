import { useNavigate, useParams } from "react-router-dom"
import useVideo from "../hooks/useVideo"
import { useSelector } from "react-redux"


const Video = () => {

  const movie_id = useParams()
  const navigate = useNavigate()
  useVideo(movie_id.id)
  const movieKey = useSelector((store) => store.movies.mainVideo)

  const handleBack = () =>{
    navigate('/browser')
  }

  if(!movieKey) return null;
  return (
    <div>
     
     <iframe className="w-screen h-[100vh] absolute" src={"https://www.youtube.com/embed/"+ movieKey.key +"?&autoplay=1&mute=0&controls=1&rel=0&loop=1"}
       title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture;
       web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     <button onClick={handleBack} className="text-white font-sans font-semibold bg-red-800 absolute mt-16 px-4 rounded-sm py-2 ml-20">Back</button>
    </div>
  )
}

export default Video