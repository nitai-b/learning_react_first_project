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
  }

  /**this is a function that is used to change the name 
   * using an input
   */
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: "25" },
        { name: event.target.value, age: "21" },
        { name: "Rae", age: "27" },
      ],
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      // to use the normal css properties you have to pass it in quotes
      // otherwise you can do it like the rest of this piece of code for 
      // styling the buttons
      'border-radius': '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        {/* this is function that is passed by reference */}
        {/* this method of passing data is not really efficient because it causes react to re-render things pretty often */}
        <button style={style} onClick={() => this.switchNameHandler('nitai barran all common letters')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click = {this.switchNameHandler.bind(this, 'Nitai Bhatta')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.changeNameHandler}
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
