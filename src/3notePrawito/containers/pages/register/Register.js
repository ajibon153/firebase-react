import React, { Component } from 'react';
import './register.scss';
import Button from '../../../components/atoms/button';
import { registerUserApi } from '../../../config/redux/action/action';
import { connect } from 'react-redux';

class Registrasi extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = async () => {
    let { email, password } = this.state;
    let res = this.props.registerApi({ email, password }).catch((err) => err);
    if (res) {
      console.log('registered complete');
      this.setState({
        email: '',
        password: '',
      });
    } else {
      console.log('error');
    }
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
            onChange={this.handleChangeText}
            value={this.state.email}
          />
          <input
            id='password'
            className='input'
            placeholder='Password'
            type='password'
            onChange={this.handleChangeText}
            value={this.state.password}
          />
          <Button
            onClick={this.handleRegisterSubmit}
            title={'Register'}
            loading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});
const reduxDispatch = (dispatch) => ({
  registerApi: (data) => dispatch(registerUserApi(data)),
});

export default connect(reduxState, reduxDispatch)(Registrasi);
