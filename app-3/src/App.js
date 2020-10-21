import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      string: '',
      array: ['run', 'eat', 'study', 'repeat']
    }
  }

  handleChange(value){
    this.setState({string: value})
  }

  render(){
    let thingsToDo = this.state.array
      .filter((element,index) => {
        return element.includes(this.state.string)
    })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
    })

    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        <p>{thingsToDo}</p>
      </div>
    )
  }
}

export default App;
