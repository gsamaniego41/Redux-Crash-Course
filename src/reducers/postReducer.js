// This is where it's going to evaluate any ACTIONS
// that are committed (fetching posts, creating a new post)
import {FETCH_POSTS, NEW_POST} from "../actions/types";

const initialState = {
  items: [], // Represents the post that come in from our ACTION --> Where we will put the fetch request
  item: {} // Represents the single post that we add, when we get the response back
};

export default function(state = initialState, action) {
  // evaluates what type we're dealing with
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer");
      return {
        // returns the state w/ the items fetched
        ...state, // initialState
        items: action.payload // From postActions.js, next step: connect Posts.js
      };
    default:
      return state;
  }
}
