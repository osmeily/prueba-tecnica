import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouter} from './routers/AppRouter';
import './styles/index.css'

ReactDOM.render(
  <div className="principal">
  <AppRouter />
  </div>,
  document.getElementById('root')
);


