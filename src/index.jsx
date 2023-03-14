import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux'


// var lock = true;

// function inmutable() {
//   const element = (
//     <div>
//       <h1>Prueba de inmutabilidad</h1>
//       <h2>Este es un número aleatorio: {Math.random()}.</h2>
//     </div>
//   );

//   if(lock) {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(element);
//     lock = false;
//   }
// }
	

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// root.render(
//   <App />
// );

// setInterval(inmutable, 1000);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
