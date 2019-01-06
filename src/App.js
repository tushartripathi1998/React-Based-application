import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
  state = {
    persons : [
        {name:'Paeu',roll:'42'},
        {name:'Sta',roll:'43'},
        {name:'Anna',roll:'19'}
    ],
    show : false
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name:'Paeu',roll:'30'},
        {name:'Sta',roll:'32'},
        {name:event.target.value,roll:'53'}
      ]
    });
  }

  deletePerson = (personIndex) => {
    const per = this.state.persons;
    per.splice(personIndex, 1);
    this.setState({ persons:per});
  }

  switchNameHandler = (newName) => {
  this.setState( {
    persons: [
      {name:newName,roll:'30'},
      {name:'Eva',roll:'32'},
      {name:'Aba',roll:'53'}
    ]
  })
};

  toggleShow = () => {
    const doesShow=this.state.show;
    this.setState({show:!doesShow});
  }

  render() {
    const style = {
      backgroundColor:"white",
      border:"1px solid blue",
      cursor:"pointer",
      padding:"8px"
    }

    let personshow = null;

    if(this.state.show){
      personshow = (
        <div>
      {this.state.persons.map((person, index) => {
        return <Person
          click = {() => this.deletePerson(index)}
          name={person.name}
          name={person.roll} />
      })}
      </div>);
    }


    return (
      <div className="App">
        <h1>Hi, I react to the changes</h1>
        <button style={style} onClick={this.toggleShow}>Switch Name </button>
        {personshow}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'hey\'z there!'));
  }
};

export default App;