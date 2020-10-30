import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      likes: 0
    }
    this.handleAdding = this.handleAdding.bind(this);
    this.handleDecreasing = this.handleDecreasing.bind(this);
    this.handleResetting = this.handleResetting.bind(this);
  }

  handleAdding() {
    this.setState((state) => {
      return {likes: state.likes += 1}
    })
  };

  handleDecreasing() {
    if(this.state.likes > 0) {
      this.setState((state) => {
        return {likes: state.likes -= 1}
      })
    }
  }

  handleResetting() {
    this.setState(() => {
      return {likes: 0}
    })
  }

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.handleAdding}>Add Like</button>
        <button onClick={this.handleDecreasing}>Delete Like</button>
        <button onClick={this.handleResetting}>Reset Likes</button>
      </div>
    );
  }
}

export default App;