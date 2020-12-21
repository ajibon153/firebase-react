import React from 'react';
import './App.css';
import firebase from './config/firebase';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Dashboard from './containers/pages/dashboard/Dashboard';
import Login from './containers/pages/login/Login';
import Register from './containers/pages/register/Register';

const Index = () => {
  console.log('uindex', firebase);
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav> */}

        <Route path='/' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </div>
    </Router>
  );
};

export default Index;
