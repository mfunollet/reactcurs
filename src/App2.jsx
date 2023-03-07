import './App.css';
import logo from './logo.svg';
//import React, { Component } from 'react';
//import ManejoPulsacion from './components/ManejoPulsacion';
//import Articulo from './components/Articulo';
//import Bitcoin from './components/Bitcoin';
//import FormularioTest from './components/FormularioTest';
//import Teclado from './components/Teclado';
//import Raton from './components/Raton';
//import Imagenes from './components/Imagenes';
//import ComponenteEventos from './components/ComponenteEventos';
//import MouseColor from './components/MouseColor';
	
// function App() {
  	
//   return (
//     //<Articulo />
//     //<Bitcoin />
//     //<ManejoPulsacion />
//     //<FormularioTest/>
//     //<Teclado/>
//     //<Raton/>
//     //<Imagenes/>
//     <div>
//       <ComponenteEventos/>
//       <MouseColor/>
//     </div>
//   );
    
// }
// export default App;
	
import Vista from './views/Vista.view'
import ListaNumeros from './components/ListaNumeros'

export default function App() {
  let compra = ["Pan", "Guacamole", "Tomates", "Jamón"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaNumeros data={compra}></ListaNumeros>
      </header>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Vista></Vista>
  //     </header>
  //   </div>
  // );
}