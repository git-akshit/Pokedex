import React, { Component } from 'react';
import axios from 'axios';

import  CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css'; // importing css

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: null,
      searchField: ''
    };
  }

  async componentDidMount() { //componentDidMount is a method in Component which is auto called by react when it renders on dom, when it renders on dom then make an api call 
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    
    this.setState({ monsters: res.data['results']});
  }


  handleChange = e => { // when component is compiled then arrow function is binded to the place where this arrow function was defined in the first place and the it is app component. you cannont call dot bind on them, auto get lexical scoping
    this.setState({ searchField: e.target.value});
  }


  render () { // whenever the setstate is called from search field render() is called and page is rerendered everytime
    // const { monsters, searchField } = this.state; 
    // console.log('1',this.state.monsters)
    const { monsters, searchField} = this.state;

    if (monsters == null) {
      return(
        <div>Loading Data</div>
      )
    }else{

      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()) //searching the monsters from search field value
        )
        console.log(filteredMonsters);

      return (
        <div className='App'>
          <h1 className='heading'>PokeMon</h1>
          <SearchBox
              placeholder = 'search pokemon'
              handleChange={this.handleChange} //e is the event which occurs on change o search field value, and we changing the state of the search field to value in it
          />
          {monsters ? (
          
          < CardList monsters={filteredMonsters}/>
          
          ):(
            <h1>Loading pokemon</h1>
          )}
          {/* {this.state.monsters.map(monster => <div> {monster[0].name} </div>)} */}
        </div>
        );
      }
  }
}

export default App;

