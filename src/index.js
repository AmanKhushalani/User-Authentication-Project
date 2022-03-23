import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './styles/main.css'
import './styles/login.css'
import './styles/dashboard.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
