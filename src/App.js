import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  addLikes = () => {
    console.log('Show me those likes!');
    let likeCount = this.state.count + 1
    this.setState({
      count: likeCount
    })
  }

  render() {
    return (
      <button className="like-btn" onClick={this.addLikes}> {this.state.count} likes </button>
      )
  }
}

export default App;
