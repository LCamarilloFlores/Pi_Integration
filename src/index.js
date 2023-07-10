import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/* eslint-disable */
particlesJS.load('particles-js', './particles.json', function () {
  console.log('callback - particles.js config loaded');
});

/* eslint-enable */

// (function () {
//   const fondo = document.getElementsByClassName("fondo");
//   fondo.className = "fondo2";
// })();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
