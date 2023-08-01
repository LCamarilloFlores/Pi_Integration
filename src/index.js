import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
