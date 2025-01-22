/* eslint-disable react-hooks/exhaustive-deps */
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addUser, removeUser } from "../utilities/userSlices";
import { gptToggle } from "../utilities/gptSlice";
import {changeLang} from '../utilities/configSlice'
import { SUPPORTED_LANG } from "../utilities/constans";

const Header = () => {

  const [isOpen ,setIsOpen] = useState(false)
  const imgRef = useRef()
  const menuRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
  const gptSearchStatus = useSelector(store => store.gpt.gptState) 

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      
    }).catch(() => {
      navigate("/error")
    });
  }

  const setSettings =() =>{
    setIsOpen(!isOpen)
  }

  const handleGptSearch = () =>{
    dispatch(gptToggle())
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {

          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate('/browser')
        } else {
            dispatch(removeUser())
            navigate('/')
          // ...
        }
      });

      return () => unsubscribe()
      
},[])

const handleChange = (e) =>{
  dispatch(changeLang(e.target.value))

}



  return (
    <div className="absolute w-screen  bg-gradient-to-b from-black flex justify-between items-center   z-10 ">
      <div className="flex justify-center items-center">
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo" className="w-28 sm:w-30 mx-6 sm:mb-10 mt-3 py-1"/>
      </div >
    <div className="flex justify-center items-center">
    {
       gptSearchStatus && (
        <select className="outline-none bg-gray-500 px-2 text-white py-1 md:px-3 md:py-2 rounded hidden md:block"
          onChange={handleChange}>
              {SUPPORTED_LANG.map((lang) =>( <option key={lang.identifier} value={lang.identifier}
             >{lang.name}</option>))}
      </select>
       )
    }
      {
        user && (
           <button className=" px-3 py-1 md:px-4 py:2  bg-red-700 text-white rounded font-semibold mx-4" onClick={handleGptSearch}>{gptSearchStatus ?  "Homepage" :"GPT Search"}</button>
        )
      }
       {user && ( 
        <div className="flex md:mr-24">
          <div  ref={imgRef} className="bg-purple-800 px-3 py-1 md:px-3 py:2 text-white my-3 mx-1 rounded-[100%] font-semibold text-l flex justify-center items-center cursor-pointer" onClick={setSettings}>
            <p>S</p>
          </div>
          <button className="mx-4 px-2 text-white rounded font-semibold" onClick={handleSignOut}>Logout</button>
        </div>
        )}
      </div>  
    </div>
  )
}


export default Header 
