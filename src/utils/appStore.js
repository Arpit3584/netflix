
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore=configureStore
(
{
    reducer:{

        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
    },
});
export default appStore;



