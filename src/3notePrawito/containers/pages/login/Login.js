import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserApi } from '../../../config/redux/action/action';
import Button from '../../../components/atoms/button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { history } = this.props;
    let { email, password } = this.state;
    let res = await this.props
      .loginApi({ email, password })
      .catch((err) => err);
    if (res) {
      localStorage.setItem('userData', JSON.stringify(res));
      this.setState({
        email: '',
        password: '',
      });
      // console.log('login berhasil', res);
      history.push('/');
    } else {
      // console.log('login gagal', res);
    }
  };

  render() {
    return (
      <div className='auth-container'>
        <div className='auth-card'>
          <p className='auth-title'>Login Page</p>
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
            onClick={this.handleLoginSubmit}
            title={'Login'}
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
  loginApi: (data) => dispatch(loginUserApi(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
