import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pokemonList from './data';

class App extends Component {
  render() {
    return (
      <Pokedex pokemonList={pokemonList} />
    );
  }
}

export default App;
