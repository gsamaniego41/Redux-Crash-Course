import React, {Component} from "react";
import {connect} from "react-redux"; // connects components to redux store
import {fetchPosts} from "../actions/postActions";
import "../App.css";
import postReducer from "../reducers/postReducer";

class Posts extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  } 
  
  
  
  === We don't need state anymore ===
  - bec posts is coming from the Redux store
  */
  componentWillMount = () => {
    this.props.fetchPosts();
  };

  render() {
    // const postItems = this.STATE.posts.map(post => ( changes to:
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div className="posts">
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // 'posts' bec that's what we called it in combineReducers
  posts: this.posts.items
  // this.posts.items from postReducer
  // And now we have this.props.posts
});

// export default Posts;
// To connect our component to the Redux store,
export default connect(
  // We need to get the new items from the state ==> mapStateToProps
  // We can get the state from Redux and map it to props of the component
  mapStateToProps,
  {fetchPosts}
)(Posts);
