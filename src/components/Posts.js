import React, {Component} from "react";
import "../App.css";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({posts: data}));
  };

  render() {
    const postItems = this.state.posts.map(post => (
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

export default Posts;
