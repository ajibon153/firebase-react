import React, { Component } from 'react';
import './register.scss';

class Registrasi extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChangeText = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.targe.value,
    });
  };
  handleSubmit = () => {
    //
    console.log(this.state);
  };

  render() {
    return (
      <div className='auth-container'>
        <div className='auth-card'>
          <p className='auth-title'>Registrasi Page</p>
          <input
            id='email'
            className='input'
            placeholder='Email'
            type='text'
            onChange={(e) => this.handleChangeText(e)}
          />
          <input
            id='password'
            className='input'
            placeholder='Password'
            type='password'
            onChange={(e) => this.handleChangeText(e)}
          />
          <button className='btn' onClick={this.handleSubmit}>
            Register
          </button>
        </div>
        {/* <button className='btn'>Go To Login</button> */}
      </div>
    );
  }
}

export default Registrasi;
