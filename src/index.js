import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './redux/reducers/userReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer: userReducer});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);