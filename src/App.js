import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList, cardList} from './components/cardList/card-list.component'
import { SearchBox } from './components/search-box/search-box'
class App extends Component {
  constructor(){
    super();
    this.state ={
     
      monsters:[
        {
          name:'Vlad'
        },
        {
          name:'Dracule'
        },
        {
          name:'Zombie'
        }
      ],
      searchField: ''
    }
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
      console.log(users)
       this.setState({ monsters: users })
      });
  }
  handleChange = (e) =>{
    this.setState(
      {searchField:e.target.value},
      () => console.log(this.state.searchField)
    )
  }
  render(){
    const { monsters,searchField } = this.state
    const FilteredMonsters = monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
    <div className="App">
      <h1>Monster Rolodex  </h1>
      <SearchBox 
      placeholder= "Search Monsters"
      handleChange = {this.handleChange}
       />
      <CardList monsters={FilteredMonsters} />
       </div>
  );
    }
}

export default App;
