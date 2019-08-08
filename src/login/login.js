import React from 'react';
import {Component} from 'react';
import './login.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  handleChange = fieldName => {
    return event => {
      this.setState({
        [fieldName]: event.target.value
      });
    };
  };

  onSave = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className='login-container'>
        <form>
          <h1>Login</h1>

          <div className='field-container'>
            <input
              className='field'
              type="text"
              value={this.state.login}
              onChange={this.handleChange('login')}/>
          </div>

          <div className='field-container'>
            <input
              className='field'
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}/>
          </div>

          <div className='field-container'>
            <button className='save-button' type='button' onClick={this.onSave}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
