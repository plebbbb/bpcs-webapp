import './App.css';
import Encode from './encode.js';
import Decode from './decode.js';

import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div class = "flex">
        <Encode/>
        <Decode/>
      </div>
    )
  }
}

export default App;
