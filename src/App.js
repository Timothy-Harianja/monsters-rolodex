import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
    // the line above is to set handlechange to the version in which the context of this is the app
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users }));
}

handleChange = (e) => { //arrow functions automatically set the context of this as the app
  this.setState({searchField: e.target.value}); //setState is an asynchronous functiion
}

render() {
  const {monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
  return (
    <div className="App"> 
      <h1> Monsters Rolodex </h1>
      <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}  
      />
      <CardList monsters={filteredMonsters}>
      </CardList>  
    </div>
  );
}
}

export default App;
