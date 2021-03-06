import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPost} from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
    this.setState({
      title: "",
      body: ""
    });
    /* === MOVED TO ACTIONS ===
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data)); 
    */

    // CALL ACTION
  };

  render() {
    return (
      <div className="post-form-container">
        <div className="post-form">
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="">Title: </label>
              <br />
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label htmlFor="">Body: </label>
              <br />
              <textarea
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  {createPost}
)(PostForm);
