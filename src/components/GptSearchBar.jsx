import { useSelector } from "react-redux"
import lang from "../utilities/languageConstants"
import { useRef } from "react"
// import client from "../utilities/openai"

const GptSearchBar = () => {
  const langState = useSelector((store) => store.config.lang)
  const searchText = useRef(null)

//   const handleSearchGpt = async () =>{
//     const format = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value 
//     + ".only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//     const gptSuggestion = await client.chat.completions.create({
//       messages: [{ role: 'user', content: format  }],
//       model: 'gpt-3.5-turbo',
//   })
// }

  return (
    <div className="pt-[20%] md:pt-[10%] px-2 flex justify-center items-center">
        <form className="bg-black p-2 w-full md:w-1/2 " onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder={lang[langState].gptSearchPlaceholder}
             className="outline py-2 px-4 w-[75%] " ref={searchText}/>
            <button className="bg-red-700 py-2 px-4 w-[25%] 
             text-white" >{lang[langState].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
