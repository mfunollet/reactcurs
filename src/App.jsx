import './App.css';
import Mensajes from './views/Mensajes.view'


//import Formulario from './components/Formulario'
// export default function App() {
//   return (
//     <div className="App">
//        {/* <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1>ReactJS | Imagina Formación</h1>
//        </header> */}
//         <div className="App-body">
//           <Formulario/>
//        </div>     
//      </div>
//   );
// }
export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
      </header> */}

      <div className="App-body">
        <Mensajes/>
      </div>     
    </div>
  );
}