//import React, { Component } from 'react';
import '../MouseColor.css';
import React, { useState } from "react";

function MouseColor() {
  const [classe, setClasse] = useState('divMouse color0');
  const [classeInner, setClasseInner] = useState('inner color0');
  const [stopColor, setStopColor] = useState(false);
  let capturarRaton = (event) => {
    var RandomNumber = Math.floor(Math.random() * 10) + 1 ;
    if(!stopColor) setClasse('divMouse color'+RandomNumber)
  };
  let capturarRatonInner = (event) => {
    var RandomNumber = Math.floor(Math.random() * 10) + 1 ;
    if(!stopColor) setClasseInner('inner color'+RandomNumber)
  };
  let changeStop = (event) => {
    setStopColor((stopColor) => !stopColor)
  }

  return (
    <div className={classe} onMouseMove={capturarRaton}>
      <div className={classeInner}
      onMouseEnter={capturarRatonInner}
      onDoubleClick={changeStop}
      ></div>
    </div>
  );
}
export default MouseColor;