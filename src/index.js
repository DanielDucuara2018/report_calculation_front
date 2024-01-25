import React from 'react';
import ReactDOM from 'react-dom/client';
// import Game from '../examples/Game';
// import Clock from '../examples/Clock';
// import Calculator from '../examples/Temperature';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Clock />
    <Game />
    <Calculator /> */}
    <App />
  </React.StrictMode>
);
