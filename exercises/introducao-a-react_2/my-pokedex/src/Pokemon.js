import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
	render() {
		const {
			name,
			type,
			image,
			averageWeight: { value: weight, measurementUnit },
    } = this.props.pokemon;

		return (
			<div className="pokemon__card">
        <div className="pokemon__card__header">
          <img src={image} alt={name}/>
          <strong>{name}</strong>
        </div>
        <div className="pokemon__card__info">
          <p>Type: <em>{type}</em></p>
          <p>Weight: <em>{weight}{measurementUnit}</em></p>
        </div>
			</div>
		);
	}
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  })
};

Pokemon.defaultProps = {
  pokemon: {},
}
