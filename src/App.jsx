import './App.css';
//import React, { Component } from 'react';
//import ManejoPulsacion from './components/ManejoPulsacion';
//import Articulo from './components/Articulo';
//import Bitcoin from './components/Bitcoin';
//import FormularioTest from './components/FormularioTest';
//import Teclado from './components/Teclado';
//import Raton from './components/Raton';
//import Imagenes from './components/Imagenes';
import ComponenteEventos from './components/ComponenteEventos';
import MouseColor from './components/MouseColor';
	
function App() {
  	
  return (
    //<Articulo />
    //<Bitcoin />
    //<ManejoPulsacion />
    //<FormularioTest/>
    //<Teclado/>
    //<Raton/>
    //<Imagenes/>
    <div>
      <ComponenteEventos/>
      <MouseColor/>
    </div>
  );
    
}
export default App;
	
//export default App;
// function App() {
//   const [nombre, setNombre] = useState('');
//   const [appelidos, setApellidos] = useState('');
//   const [resultado, setResultado] = useState('');
  
//     const manejarPulsacion = (event) => {
//       setResultado(`${nombre} ${apellidos}`);
//     }
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Formulario en React</h1>
          
//           // ...
//           <button onClick={manejarPulsacion}>Mostrar datos</button>
          
//           <strong>{resultado}</strong>
//         </header>
//       </div>
//     );
// }