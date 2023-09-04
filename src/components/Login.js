import { useState } from "react";
import Header from "./Header";

const Login = () => {
const[isSignInForm,setIsSignInForm]=useState(true);

const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
}

  return (
    <div>
    
    <div className="absolute">
    <img
src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
    <Header/>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-center content-center bg-opacity-80"  >
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?" Login":"Sign Up"}</h1>
    {!isSignInForm && (<input type="text" placeholder="Full Name" 
    className='p-2 my-4 bg-gray-600 rounded-lg w-full'/>)}
    <input type="text" placeholder="Email Address" 
    className='p-2 my-4 bg-gray-600 rounded-lg w-full'/>
     
    <input type="password" placeholder="Password" 
    className='p-2 my-4  bg-gray-600 rounded-lg w-full'/>
   <button className='p-4 my-4  bg-red-700 rounded-lg w-full'>{isSignInForm?"Login":"SignUp"}</button>
    <p className='p-2 my-4 cursor-pointer text-white' onClick={toggleSignInForm}>
        {isSignInForm?"New to Netflix ? Sign Up Now":"Already registered ?Login now"}</p>
    </form>
        </div>
  )
}

export default Login;