import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

//import CSS
import './styles/index.css';
//import CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://ryanliang.test/api/';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
