import './App.css';
import Articulo from './components/Articulo';
import Bitcoin from './components/Bitcoin';


// import React, { Component } from 'react';
 
// class ComponenteClase extends Component {
  
//   //Aquí podría haber un constructor de la clase
//   render(){
//    return (<h3> Componente de Clase </h3>);
//   }
// }
 
// export default ComponenteClase ;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

	
function App() {
  return (
    <Articulo />
    //<Bitcoin />
  );
    
}
  
export default App;
