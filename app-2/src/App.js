import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      things: ['Hydroflask', 'WiFi', 'Pillow']
    };
  }

  render(){
    let listOfThings = this.state.things.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
    <div className="App">
      <h1>Janie's List of Things</h1>
      {listOfThings}
    </div>
    )
  }
}
  

export default App;
