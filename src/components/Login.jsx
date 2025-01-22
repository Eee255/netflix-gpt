import { useState,useRef } from "react"
import Header from "./Header"
import { Formvalidation } from "../utilities/Validation"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utilities/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlices";



const Login = () => {

  
  const dispatch = useDispatch()
  const [isSignIn,setIsSignIn] = useState(true)
  const [errMessaage,setErrorMes] = useState(null)
  

  const userName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)


  const toggleToSignUp = () =>{
    setIsSignIn(!isSignIn)

  }



  const handlingFormBig = () =>{
    const errmess = Formvalidation(email.current.value,password.current.value)
    setErrorMes(errmess)

    if(errmess) return;

    if(!isSignIn){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: userName.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      // ...
    }).catch((error) => {
      setErrorMes(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode,errorMessage){
      setErrorMes(errorCode+"-"+errorMessage)
    }
  });
    }
  }

  return (
    <>
    <div className="">
        <Header/>
        <div className="hidden sm:block absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
            alt="background-image" className=" xs:object-scale-down w-[100vw] h-[100vh] object-cover" />
            <div className="text-gray-500 px-20 pt-80 pb-20 bg-black flex flex-col ">
              <h1 className="my-5 text-left">Questions? Call 000-800-919-1694</h1>
              <ul className="flex flex-wrap">
                <li className="underline  my-2 w-3/12">FAQ</li>
                <li className="underline  my-2 w-3/12">Help Center</li>
                <li className="underline  my-2 w-3/12">Terms of Use</li>
                <li  className="underline my-2 w-3/12">Privacy</li>
                <li className="underline  my-2 w-3/12">Cookie Preferences</li>
                <li className="underline  my-2 w-3/12">Corporate Information</li>
              </ul>
            </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute  bg-black p-9 sm:px-16 sm:min-w-[400px] sm:max-w-[450px] sm:my-20 mx-auto right-0 left-0 text-white sm:rounded-md sm:bg-opacity-[80%]  ">
          <h1 className=" sm:mx-2 font-bold text-[30px] my-5">{isSignIn ? "Sign In": "Sign Up"}</h1>
          {!isSignIn &&  <input type="text" placeholder="User name" ref={userName}   className="p-2 py-4 m-2 w-full border-[1px] border-gray-500   bg-gray-700 rounded-md outline-none bg-opacity-80"/> }
          <input type="text" placeholder="E-mail" ref={email} className="p-2 py-4 m-2 w-full  bg-gray-700 border-[1px] border-gray-500 rounded-md outline-none bg-opacity-80"/>
          <input type="password" placeholder="password" ref={password} className="p-2 py-4 m-2 w-full bg-gray-700 border-[1px] border-gray-500 rounded-md outline-none bg-opacity-80"/>
           {errMessaage  && <p className="text-red-600 text-[15px] font-semibold p-2 font-sans">*{errMessaage}</p>}
          <button className="bg-red-700  w-full m-2 p-2 rounded-sm" onClick={handlingFormBig}>{isSignIn ? "Sign In": "Sign Up"}</button>
          <h1 className="text-center">OR</h1>
          <button className="bg-gray-400 bg-opacity-50  w-full m-2 p-2 rounded-sm">Use a sign-in code</button>
          <h1 className="text-center hover:underline cursor-pointer my-2">Forget password?</h1>
          <div className="flex items-center my-2">
            <input type="checkbox" className="mx-2" id='remember'/>
            <label htmlFor="remember mt-2">Remember me</label>
          </div>
          <h1 className="text-gray-400" onClick={toggleToSignUp}>{isSignIn?"New to Netflix?":"Existing User?"} <span className="text-white font-semibold hover:underline cursor-pointer">{isSignIn? "Sign up now":"Sign In now"}</span></h1>
          <p className="text-gray-400 text-[12px] mt-4">This page is protected by Google reCAPTCHA to ensure your not a bot. <span className="text-blue-500">Learn more.</span></p>
          <div className="text-gray-500  bg-black  block sm:hidden">
            <hr className="text-gray-400 my-10"/>
              <h1 className="my-5 text-left">Questions? Call 000-800-919-1694</h1>
              <ul className="flex flex-wrap text-[13px] font-sans">
                <li className="underline  my-2 w-1/2">FAQ</li>
                <li className="underline  my-2 w-1/2">Help Center</li>
                <li className="underline  my-2 w-1/2">Terms of Use</li>
                <li  className="underline my-2 w-1/2">Privacy</li>
                <li className="underline  my-2 w-1/2">Cookie Preferences</li>
                <li className="underline  my-2 w-1/2">Corporate Information</li>
              </ul>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login