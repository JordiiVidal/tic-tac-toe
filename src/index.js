import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);

