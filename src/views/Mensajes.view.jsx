import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component'
import MensajesTable from '../components/MensajesTable/MensajesTable.component'
import './Mensajes.view.css'
import { useSelector, useDispatch } from 'react-redux'

import {
	borrarMensaje,
	crearMensaje,
	leerMensaje,
	vaciarMensajes,
} from '../redux/actions'
//import { useState } from 'react';

export default function Mensajes() {
	const mensajes = useSelector((state) => state.mensajes)
	const dispatch = useDispatch()

	let crear = ({ asunto, email, mensaje }) => {
		let nuevo = {
			asunto: asunto,
			email: email,
			mensaje: mensaje,
			leido: false,
		}

		dispatch(crearMensaje(nuevo))
	}
	let vaciar = () => {
		dispatch(vaciarMensajes())
	}
	let eliminar = (index) => {
		dispatch(borrarMensaje(index))
	}
	let leer = (index) => {
		dispatch(leerMensaje(index))
	}

	return (
		<>
			<div className='Mensajes'>
				<MensajesHeader
					clickNuevo={crear}
					clickEliminar={vaciar}
				></MensajesHeader>

				<MensajesTable
					mensajes={mensajes}
					clickEliminarUno={eliminar}
					clickMarcarLeido={leer}
				></MensajesTable>
			</div>
		</>
	)
}
