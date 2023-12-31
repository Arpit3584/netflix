import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick=()=>
  {
    dispatch(toggleGptSearchView());
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <button className="py-2 px-4 m-2 bg-purple-800 text-white rounded lg"
          onClick={handleGptSearchClick} >
            GPT Search
          </button>
          
      <span>
        <p className='m-2 p-2 text-lg text-white'>{user?.displayName}</p></span> 
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="m-2 p-2 font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;