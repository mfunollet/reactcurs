//import React, { Component } from 'react';
import React, { useEffect, useState, useRef } from "react";

function FormularioTest() {
  	
  const nombreRef = React.createRef();
  const apellidosRef = React.createRef();
  const [resultado, setResultado] = useState('');
  const contador = useRef(0);

    
  const manejarPulsacion = (event) => {
    setResultado(`${nombreRef.current.value} ${apellidosRef.current.value}`);
  }

  	
  useEffect(() => {
    contador.current = contador.current + 1;
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario en React</h1>
        	
        <input placeholder="Introduce tu nombre" ref={nombreRef}></input>
        <input placeholder="Introduce tus apellidos" ref={apellidosRef}></input>
        <button onClick={manejarPulsacion}>Mostrar datos</button>
        
        <strong>{resultado}</strong>
        <div>
          El componente se ha renderizado: {contador.current}
        </div>
      </header>
    </div>
  );
    
}
export default FormularioTest;