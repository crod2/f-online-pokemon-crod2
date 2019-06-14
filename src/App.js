import React from 'react';
import {fetchPokemons} from './services/fetchAPI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonsArr: []
    }

    this.getPokemons = this.getPokemons.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    fetchPokemons()
    .then(data => data.results.map(item => {
        fetch(item.url)
          .then(dataResults => dataResults.json())
          .then(finalData => 
            console.log(finalData))
    }))
  }

  render() {
    return (
      <div className="pokemon__container">
        <div className="pokemon__filter">
          <label htmlFor="input"></label>
          <input type="text"/>
        </div>
      </div>
    )  
  }
}

export default App;
