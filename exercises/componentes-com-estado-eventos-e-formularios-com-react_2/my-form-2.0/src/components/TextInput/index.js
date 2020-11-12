import React, { Component } from 'react';
import './style.css';

class TextInput extends Component {
  render() {
    const {
      name,
      value,
      placeholder,
      maxlength,
      required,
      handleChange,
      onBlur,
    } = this.props;

    return (
      <div className="text-input">
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required={required}
          maxLength={maxlength}
          onBlur={onBlur}
          autoComplete='false'
        />
        <span>{placeholder}</span>
      </div>
    );
  }
}

export default TextInput;
