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
    otherState: "some other value",
    showPersons: false,
  };

  /**
   * I should also note that, you can only cause react to re-render
   * the dom when you change the state (a keyword) and the
   * props of a component.
   */

  /**this is a function that is used to change the name
   * using an input
   */
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { id: '1', name: "Max", age: "25" },
        { id: '8fasdf', name: event.target.value, age: "21" },
        { id: 'afd8', name: "Rae", age: "27" },
      ],
    });
  };

  // a note about arrays in javascript. these types are referenced
  // meaning that the variable is a pointer to the original value
  // and by changing the pointer you change the original value
  // this can lead to unpredictable apps
  // so you need to do things immutably
  deletePersonHandler = (personIndex)  => {
    // const persons = this.state.persons.slice(); // this copies the original array to this variable constant
    const persons = [...this.state.persons]; // the spread operator is similar to the function of slice() above
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => { // write the function definition like this so you can use the `this` keyword
    const doesShow = this.state.showPersons;
    this.setState({
      // setstate is a special function that is used to manipulate the state
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      // to use the normal css properties you have to pass it in quotes
      // otherwise you can do it like the rest of this piece of code for
      // styling the buttons
      "border-radius": "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      // if this state variable is true we can return some jsx code
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        {/* this is function that is passed by reference */}
        {/* this method of passing data is not really efficient because it causes react to re-render things pretty often */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {/* we must know that all that we've written here is javascript
            and in order to interject javascript expressions, you can use curly braces. 
            This is what is done to render the content conditionally based on the state
            called showPersons
        */}
        {persons}
      </div>
    );
  }
}

export default App;
