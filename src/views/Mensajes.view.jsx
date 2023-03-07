import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import './Mensajes.view.css';

import { useState } from 'react';


export default function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
    
    let nuevoMensaje = (event, { setSubmitting }) => {
      console.log(event);
      const asunto = event.asunto;
      const email = event.email;
      const mensaje = event.mensaje;
      let nuevo = {
        "asunto": asunto,
        "email": email,
        "mensaje": mensaje,
        "leido": false
      };
      setSubmitting(false);
      setMensajes(mensajes => [...mensajes, nuevo]);
    };
    
    let eliminarMensajes = () => {
      setMensajes([]);
    };
    
    let eliminarMensaje = (index) => {
      mensajes.splice(index, 1);
      setMensajes([...mensajes]);
    };
    	
    let leerMensaje = (index) => {
      mensajes[index].leido = !mensajes[index].leido;
      setMensajes([...mensajes]);
    }
  
    return (
      <div className='Mensajes'>
        <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}>
        </MensajesHeader>
        
        <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje}
        clickMarcarLeido={leerMensaje}></MensajesTable>
      </div>
    );
  }