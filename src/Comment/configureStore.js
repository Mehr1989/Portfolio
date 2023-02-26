
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./commentSlice"


const reducer = combineReducers({
    posts : postsReducer
      
})

const store = configureStore({
  reducer

})

export default store