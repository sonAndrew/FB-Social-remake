import React, { Component } from 'react';

import FSocial from './Components/FSocial_Component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', width: "100%"}}>
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        <FSocial />
        
      </div>
    );
  }
}

export default App;
