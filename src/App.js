import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/Person'; 
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    people: [
      { id: 'aasdf', name: 'Heli', age: 33 },
      { id: 'pp57qd', name: 'Robin', age: 38 },
      { id: 'ksjs2', name: 'Charlie', age: 7 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const person = { 
      ...this.state.people[personIndex]
    }
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person; 
    this.setState({ 
      people: people 
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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.people.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} // alternative: .bind(this, index)
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div> 
      )
    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push( classes.bold ); // classes = ['red, 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;


