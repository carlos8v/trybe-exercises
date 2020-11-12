import React, { Component } from 'react';
import './style.css';

class ComboBoxInput extends Component {
  render() {
    const {
      name,
      value,
      placeholder,
      handleChange
    } = this.props;

    return (
      <div className="combobox">
        <select name={name} id={name} value={value} onChange={handleChange}>
          {this.props.children}
        </select>
        <span>{placeholder}</span>
      </div>
    );
  }
}

export default ComboBoxInput;
