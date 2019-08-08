import React from 'react';
import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
            <TextField
              label="Login"
              value={this.state.login}
              fullWidth={true}
              onChange={this.handleChange('login')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <TextField
              label="Password"
              value={this.state.password}
              type='password'
              fullWidth={true}
              onChange={this.handleChange('password')}
              margin="normal"
            />
          </div>

          <div className='field-container'>
            <Button onClick={this.onSave} color="primary" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
