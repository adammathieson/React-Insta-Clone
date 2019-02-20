import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import "./components/SearchBar.css";

import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer key={post.imageUrl} post={post} />)}
      </div>
    );
  }
}

export default App;
