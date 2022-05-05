import './App.css';
import Encode from './encode.js';
import Decode from './decode.js';

import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <h1>BPCS Steganography Webapp<h1/>
        <div maxwidth=50vw>
             "BPCS is an image steganography algorithm which attempts to hide data within images while minimizing any visual artifacting caused from the encryption.
             This is done via a technique to determine the uniformitivity of the image in order to estimate the visual disturbance caused by the change.
             Encode and decode files below:"
        <div/>
        <div class = "flex">
          <Encode/>
          <Decode/>
        </div
      </div>
    )
  }
}

export default App;
