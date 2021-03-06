import React, {Component} from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SeachBox } from './components/search-box/search-box.components';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value });
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toString().toLowerCase().includes(searchField).toString().toLowerCase()
      );

      console.log(filteredMonsters);

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SeachBox
          placeholder='Search Monsters'
          handleChange={ e => this.handleChange }
        />
          
        <CardList monsters={ filteredMonsters }>    
        </CardList>
      </div>
    )
  }
}

export default App;
