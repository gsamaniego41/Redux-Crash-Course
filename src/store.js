import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
// A store holds the whole state tree of our application
// The only way to change the state inside it is to dispatch an action to it

/* === From Redux-Thunk Docs ===

Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
*/

export default store;
