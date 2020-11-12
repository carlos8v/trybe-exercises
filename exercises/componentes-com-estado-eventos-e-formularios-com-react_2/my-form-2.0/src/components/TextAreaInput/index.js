import React, { Component } from 'react';
import './style.css';

class TextAreaInput extends Component {
  render() {
    const {
      name,
      value,
      rows,
      required,
      maxlength,
      placeholder,
      handleChange,
      onMouseEnter
    } = this.props;
    return (
      <div className="textarea">
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          rows={rows}
          required={required}
          maxLength={maxlength}
          onMouseEnter={onMouseEnter}
        ></textarea>
          <span>{placeholder}</span>
      </div>
    );
  }
}

export default TextAreaInput;
