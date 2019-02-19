// This is where we want to combine our reducers
import {combineReducers} from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
