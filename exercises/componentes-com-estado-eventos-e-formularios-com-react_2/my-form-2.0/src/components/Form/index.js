import React, { Component } from 'react';
import './style.css';

import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import ComboBoxInput from '../ComboBoxInput';
import RadioInput from '../RadioInput';

import data from '../../data';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      place: 'home',
      curriculum: '',
      job: '',
      jobDescription: '',
      firstTime: true,
    };
  }

  handleTextInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <TextInput
            name='name'
            value={this.state.name}
            handleChange={({ target }) =>
              this.handleTextInputChange('name', target.value.toUpperCase())
            }
            placeholder='Nome'
            required={true}
            maxlength={40}
          />

          <TextInput
            name='email'
            value={this.state.email}
            handleChange={({ target }) =>
              this.handleTextInputChange('email', target.value)
            }
            placeholder='Email'
            required={true}
            maxlength={50}
          />

          <TextInput
            name='cpf'
            value={this.state.cpf}
            handleChange={({ target }) =>
              this.handleTextInputChange('cpf', target.value)
            }
            placeholder='CPF'
            required={true}
            maxlength={11}
          />

          <TextInput
            name='address'
            value={this.state.address}
            handleChange={({ target }) =>
              this.handleTextInputChange('address', target.value)
            }
            placeholder='Endereço'
            required={true}
            maxlength={200}
          />

          <TextInput
            name='city'
            value={this.state.city}
            handleChange={({ target }) =>
              this.handleTextInputChange('city', target.value)
            }
            onBlur={({ target }) => {
              if (/^[0-9]{1,}/.test(target.value))
                this.handleTextInputChange('city', '');
            }}
            placeholder='Cidade'
            required={true}
            maxlength={28}
          />

          <ComboBoxInput 
            name="state"
            value={this.state.state}
            handleChange={({ target }) => this.handleTextInputChange('state', target.value)}
            placeholder='Estado'
          >
            {Object.keys(data.states).map((state) => (
              <option key={state} value={state}>
                {data.states[state]}
              </option>
            ))}
          </ComboBoxInput>

          <RadioInput placeholder='Residência'>
            <label>
              <input
                type='radio'
                name='place'
                value='home'
                required={true}
                defaultChecked
                onChange={({ target }) =>
                  this.handleTextInputChange('place', target.value)
                }
              />
              Casa
            </label>

            <label>
              <input
                type='radio'
                name='place'
                value='apartment'
                required={true}
                onChange={({ target }) =>
                  this.handleTextInputChange('place', target.value)
                }
              />
              Apartamento
            </label>
          </RadioInput>

        </fieldset>

        <fieldset>
          <legend>Emprego</legend>

          <TextAreaInput
            name='curriculum'
            value={this.state.curriculum}
            handleChange={({ target }) =>
              this.handleTextInputChange('curriculum', target.value)
            }
            placeholder='Currículo'
            required={true}
            rows={10}
            maxlength={1000}
          />

          <TextAreaInput
            name='job'
            value={this.state.job}
            handleChange={({ target }) =>
              this.handleTextInputChange('job', target.value)
            }
            placeholder='Cargo'
            onMouseEnter={() => {
              if (this.state.firstTime) {
                alert('Preencha com cuidado esta informação');
                this.setState((prevState, _props) => ({ firstTime: !prevState.firstTime}))
              }
            }}
            required={true}
            rows={3}
            maxlength={40}
          />
          
          <TextAreaInput
            name='job'
            value={this.state.jobDescription}
            handleChange={({ target }) =>
              this.handleTextInputChange('jobDescription', target.value)
            }
            placeholder='Descrição do Cargo'
            required={true}
            rows={5}
            maxlength={500}
          />

        </fieldset>
      </form>
    );
  }
}

export default Form;
