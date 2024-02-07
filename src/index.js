import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './store/UserProvider';

ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);