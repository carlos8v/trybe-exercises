import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return(
      <>
        <h1 className="pokedex__header">Pokedex</h1>
        <div className="pokedex__list">
          {pokemonList.map((pkm) => <Pokemon pokemon={pkm} key={pkm.id} />)}
        </div>
      </>
    );
  }
}

export default Pokedex;

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  }))
};
