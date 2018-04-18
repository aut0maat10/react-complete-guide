import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    people: [
      { name: 'Heli', age: 33 },
      { name: 'Robin', age: 38 },
      { name: 'Charlie', age: 7 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 27 },
        { name: 'Robin', age: 38 },
        { name: 'Charlie', age: 8 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Matheo')}>Switch Name</button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age} 
          />
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')}>
            My hobbies: Reading
          </Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}
          />
      </div>
    );
  }
}

export default App;


