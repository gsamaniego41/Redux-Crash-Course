import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Provider} from "react-redux"; // Provider is the glue for React and Redux

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Redux Crash Course</p>
            <a
              className="App-link"
              href="https://youtu.be/93p3LxR9xfM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutorial
            </a>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

/* === From Redux Docs === 

A store holds the whole state tree of our application
The only way to change the state inside it is to dispatch an action to it 

createStore(reducer, [preloadedState], [enhancer])
preloadedState - initial state
enhancer - ex: applyMiddleWare()
*/
