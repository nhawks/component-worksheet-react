import axios from 'axios';
import React, { Component } from 'react';


const baseURL = 'https://v2.jokeapi.dev/joke/Programming?amount=1'

class DisplayJoke extends Component {
  state = { 
    joke: []
  }

  componentDidMount() {
    this.getJoke()
  }

  async getJoke(){
    let response = await axios.get(baseURL)
    this.setState({
      joke: response.data
    })
  }

  render() { 
    return (
      <div>
        <h2>Random Joke API:</h2>
        <h3>{this.state.joke.setup}</h3>
        <h3>{this.state.joke.delivery}</h3>
      </div>
    );
  }
}
 
export default DisplayJoke;