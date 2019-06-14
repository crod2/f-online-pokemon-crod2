import React from 'react';
import { fetchPokemons } from './services/fetchAPI';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    }

    this.getPokemons = this.getPokemons.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    fetchPokemons().then(data => { 
      console.log(data)
    })
  }

  render() {

    return (
      <div className="App">
        
      </div>
    )  
  }
}

export default App;
