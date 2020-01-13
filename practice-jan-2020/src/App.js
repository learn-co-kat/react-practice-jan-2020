import React, { Component } from 'react';
import './App.css';
import CharacterContainer from './containers/CharacterContainer'
import FavsContainer from './containers/FavsContainer'

const API = "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people"

class App extends Component {

  state = {
    characters: [],
    like: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        characters: json.results
      })
    })
  }

  addCharacter = (char) => {
    this.setState({
      like: [...this.state.like, char]
    })
  }

  render(){
    return (
      <div>
      <CharacterContainer charList={this.state.characters} like={this.addCharacter} />
      <FavsContainer favs={this.state.like} />
      </div>
    )
  }
}

export default App;