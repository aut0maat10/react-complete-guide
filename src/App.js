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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.people.map(person => {
            return <Person 
              name={person.name}
              age={person.age} 
              />
          })}
        </div> 
      )
    }
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;


