import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata } from "../utils/validate";
import { auth } from "../utils/firebase"; 
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, bg_image } from "../utils/constants";


const Login = () => {
const[isSignInForm,setIsSignInForm]=useState(true);
const[errorMessage,setErrMessage]=useState(null);
const navigate=useNavigate();
const dispatch = useDispatch();
const email=useRef(null);
const password=useRef(null);
const userName=useRef(null);

const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
}
const handleButtonClick=()=>
{
    //Valdidate the form Data
    console.log(userName);
   
    //Question:how to add null check in javascript?
    const name=!isSignInForm?userName.current.value:null;
    const message=checkValidata(email.current.value,password.current.value,name);
    setErrMessage(message);
    if(message) return;

    if(!isSignInForm)
    {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("the user is",user);
          const pUrl=USER_AVATAR;
          console.log("photo url is",pUrl);
          updateProfile(user,{
            displayName:name,photoURL:USER_AVATAR
          }).then(
            ()=>{
           const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              

            }
          ).catch((error) =>
          {
            setErrMessage(error.message);
          });

          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          const errorMessage = error.message;
          console.log(error);
          setErrMessage(errorCode+" - "+errorMessage);
          // ..
        });
        //arpit123aA@

    }
    else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
         // navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+" - "+errorMessage);
        });

    }
 
}
  return (
    <div>
    
    <div className="absolute">
    <img
src={bg_image}/>
    </div>
    <Header/>
    <form onSubmit={(e)=>e.preventDefault()}className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-center content-center bg-opacity-80"  >
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?" Login":"Sign Up"}</h1>
    {!isSignInForm && (<input type="text" placeholder="Full Name" 
    ref={userName}
    className='p-2 my-4 bg-gray-600 rounded-lg w-full'/>)}
    <input type="text" placeholder="Email Address" 
    ref={email}
    className='p-2 my-4 bg-gray-600 rounded-lg w-full'/>
     
    <input type="password" placeholder="Password" 
    ref={password}
    className='p-2 my-4  bg-gray-600 rounded-lg w-full'/>
   
   {errorMessage&&(<p className="text-red-500 font-bold text-lg">{errorMessage}</p>)}
   <button className='p-4 my-4  bg-red-700 rounded-lg w-full'onClick={handleButtonClick}>{isSignInForm?"Login":"SignUp"}</button>
    <p className='p-2 my-4 cursor-pointer text-white' onClick={toggleSignInForm}>
        {isSignInForm?"New to Netflix ? Sign Up Now":"Already registered ?Login now"}</p>
    </form>
        </div>
  )
}

export default Login;