import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  // this is a reserved word
  state = {
    persons: [
      { name: "Nitai", age: "25" },
      { name: "Hari", age: "21" },
      { name: "Rae", age: "24" },
    ],
  };

  /**
   * I should also note that, you can only cause react to re-render
   * the dom when you change the state (a keyword) and the 
   * props of a component. 
   */

  /**this is a function that is used to switch the person */
  switchNameHandler = newName => {
    // console.log('this was clicked')
    // DONT DO THIS: this.state.persons[0].name = 'Nitai Barran';
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Hari", age: "21" },
        { name: "Rae", age: "27" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        {/* this is function that is passed by reference */}
        <button onClick={this.switchNameHandler.bind(this, 'Nitai Raghunatha')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click = {this.switchNameHandler.bind(this, 'Nitai Bhatta')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
