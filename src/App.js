import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <Person name = "Nitai" age="23"/>
        <Person name = "David" age="24">My Hobbies: Racing</Person>
        <Person name = "Ryan" age="26"/>
      </div>
    );
  }
}

export default App;
