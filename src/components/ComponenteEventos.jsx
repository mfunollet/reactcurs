//import React, { Component } from 'react';
import React, { useState } from "react";

function ComponenteEventos() {
  const [text, setText] = useState('');

  const manejarPulsacionesTeclado = (event) => {
    setText(event.target.value + event.key);
  };

  const manejarDown = (event) => {
    if(event.code === "Backspace") {
        setText(event.target.value.slice(0, -1));
    }else{
        setText(event.target.value + event.key);
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyPress={manejarPulsacionesTeclado}
        onKeyDown={manejarDown}
      />
      <br/>
      <h1>{text}</h1>
    </div>
  );
}
export default ComponenteEventos;