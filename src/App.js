import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    people: [
      { name: 'Heli', age: 33 },
      { name: 'Robin', age: 38 },
      { name: 'Charlie', age: 7 }
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value, age: 27 },
        { name: 'Robin', age: 38 },
        { name: 'Charlie', age: 8 }
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        { this.state.showPersons ? 
          <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
            changed={this.nameChangedHandler}
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
        </div> : null
        }
      </div>
    );
  }
}

export default App;


