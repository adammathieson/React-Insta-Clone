import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";
import CommentSection from './components/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
    // console.log(this.state.posts)
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => <PostContainer key={post.imageUrl} post={post} />)}
        <SearchBar />
        <CommentSection />
      </div>
    );
  }
}

export default App;
