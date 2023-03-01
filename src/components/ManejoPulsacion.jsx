import React, { Component } from 'react';

export default class ManejoPulsacion extends Component {
    constructor(props) {
      super(props);    
      this.state = {encendido: true};
      // this.manejarPulsacion = this.manejarPulsacion.bind(this);
    }
    
    manejarPulsacion = (event) => {
      this.setState((prevState, props) => ({       
        encendido: !prevState.encendido
      }));
    }
    
    render() {
      return(
        <div className="App">
          <header className="App-header">
            <button onClick={this.manejarPulsacion}>
              {this.state.encendido ? 'Activado' : 'Desactivado'}
            </button>
          </header>
        </div>
      );
    }
  }