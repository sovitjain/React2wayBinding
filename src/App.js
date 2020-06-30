import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

state = { 
  names: [
    {name : 'sovit'},
    {name : 'sss'},
    {name : 'ssyssovit'}
  ]  
}

eventHandler  = (event) => {
  this.setState (
    {
      names: [
        {name : event.target.value},
        {name : 'sss1'},
        {name : 'ssyssovit1'}
      ] 
    }

  )
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput onChange={this.eventHandler}/>
        <UserOutput name= {this.state.names[0].name}/> 
        <UserOutput name={this.state.names[1].name} />
        <UserOutput name={this.state.names[2].name}/>

      </div>
    );
  }
}

export default App;
