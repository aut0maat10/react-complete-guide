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

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: event.target.value, age: 27 },
        { name: 'Robin', age: 38 },
        { name: 'Charlie', age: 8 }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people})
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
          { this.state.people.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} // alternative: .bind(this, index)
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


