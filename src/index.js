import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginForm from './login/loginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Business from './business/business';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/business" component={Business}/>
    </Switch>
  </Router>
  ),
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
