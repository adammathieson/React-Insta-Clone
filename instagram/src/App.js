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
    console.log(this.state.posts)
  }

  render() {
    return (
      <div className="App">
      
      {this.state.posts.map(post => <PostContainer key={post.timestamp} post={post} />)}
        {/* <SearchBar /> */}
        <PostContainer post={this.state.posts}/>
      </div>
    );
  }
}

export default App;
