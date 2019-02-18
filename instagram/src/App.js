import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from "./components/PostContainer";


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
