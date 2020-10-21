import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import Login from './Login'
class App extends Component {
  constructor(){
    super();
  }

render(){
  return(
    <div className="App">
      <Login/>
    </div>
  )
}

}
export default App;
