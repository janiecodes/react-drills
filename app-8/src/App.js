import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component{
  constructor(){
    super()

    this.state = {
      blastoise: ""
    } 
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/blastoise')
    .then(response => {
      this.setState({
        blastoise: response.data
      })
    })
  }


  render(){
    return(
      <div className="App">
        <h1>Name: {this.state.blastoise.name}</h1>
        <h1>Ability: {this.state.blastoise.ability}</h1>
        <h1>Power: {this.state.blastoise.power}</h1>
        <h1>Color: {this.state.blastoise.color}</h1>
      </div>
    )
  }

}






export default App;
