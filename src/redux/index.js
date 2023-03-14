import { createStore, combineReducers } from 'redux';
//import allReducers from './reducers'
//import { mensajes,login } from './reducers';
import login from './reducers/login'
import mensajes from './reducers/mensajes'

let reducers = combineReducers({
  mensajes: mensajes,
  login: login,
});
 
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//const store = createStore(allReducers)
// STORE - El estado global de la aplicación.
// let store = createStore(
//   mensajes,
//   login,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;