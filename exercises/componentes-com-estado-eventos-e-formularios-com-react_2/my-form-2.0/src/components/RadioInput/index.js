import React, { Component } from 'react';
import './style.css';

class RadioInput extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <div className="radio">
        {this.props.children}
        <span>{placeholder}</span>
      </div>
    );
  }
}

export default RadioInput;
