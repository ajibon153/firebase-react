import React, { Component } from "react";
import "./register.scss";
import firebase from "../../../config/firebase";
import "firebase/auth";

class Registrasi extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = () => {
    console.log(this.state);
    console.log("firebase", firebase);
    console.log("firebase.default", firebase.default);
    console.log("firebase.auth", firebase.auth);
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // Signed in
        // ...
        console.log("success", user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log("error", error);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Registrasi Page</p>
          <input
            id="email"
            className="input"
            placeholder="Email"
            type="text"
            onChange={this.handleChangeText}
          />
          <input
            id="password"
            className="input"
            placeholder="Password"
            type="password"
            onChange={this.handleChangeText}
          />
          <button className="btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
        {/* <button className='btn'>Go To Login</button> */}
      </div>
    );
  }
}

export default Registrasi;
