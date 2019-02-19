import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from "./components/PostContainer";
// import SearchBar from "./components/SearchBar";

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
        {/* <SearchBar /> */}
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;