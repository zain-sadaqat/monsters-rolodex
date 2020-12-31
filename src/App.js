import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
    this.setState({ title: e.target.value })

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField, title} = this.state;
    const filteredData = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    const heading = (title) ? title : "Monsters Rolodex";
    return (
      <div className="App">
        <h1>{heading}</h1>
      <SearchBox placeholder="search ..." handleChange={this.handleChange}/>
      <CardList monsters={filteredData} />
    </div>
    )
  }
}
export default App;
