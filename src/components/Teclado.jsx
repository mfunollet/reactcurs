//import React, { Component } from 'react';
//import React, { useEffect, useState, useRef } from "react";

function Teclado() {
  let manejarTeclado = (event) => {
    if(event.charCode === 13) {
      alert("Se ha pulsado la tecla ENTER");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Se lanzará alerta" onKeyPress={manejarTeclado} />
        <input placeholder="No se lanzará alerta" />
      </header>      
    </div>
  );
}
export default Teclado;