import {FETCH_POSTS, NEW_POST} from "./types";

// export function fetchPosts() { // *Replaced w/ ES6 - same as line 4*
export const fetchPosts = () => dispatch => {
  // Thunk allows us to call the dispatch function directly so we can make async requests
  // return function(dispatch) { // *Replaced w/ ES6 - same as line 4*

  // dispatch is like a resolver in a Promise
  // you can pass in w/e you wanna pass in
  // in this case it's the type and payload
  console.log("fetching");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    // .then(data => this.setState({posts: data}));
    // We don't need setState anymore,
    // What we wanna do is dispatch the data to the reducer
    .then(
      posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        }) // Will be reduced inside of postReducer
    );
};
