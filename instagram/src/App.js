import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from "./components/PostContainer";
import SearchBar from "./components/SearchBar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      search: ""
    };
  }
  
//   componentDidMount() {
//     this.setState({ posts: dummyData })
// }

filterSearch = (e, searchValue) => {
  e.preventDefault();
  
  const filteredSearch = this.state.posts.filter(post => post.username.includes(searchValue));
  console.log(filteredSearch);
  this.setState({ posts: filteredSearch})
}

  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.posts} filterSearch={this.filterSearch}/>
        {this.state.posts.map(post => <PostContainer key={post.imageUrl} post={post} />)}
      </div>
    );
  }
}

// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
