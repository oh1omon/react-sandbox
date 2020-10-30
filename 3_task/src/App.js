import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      likes: 0
    }
  }
  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
      </div>
    );
  }
}

export default App;