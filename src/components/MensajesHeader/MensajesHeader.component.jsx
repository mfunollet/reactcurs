import './MensajesHeader.component.css'
import { Formik } from 'formik'
import * as Yup from 'yup'

export default function MensajesHeader(props) {
	const validaciones = Yup.object().shape({
		asunto: Yup.string()
			.required('Por favor, escribe un asunto.')
			.min(3, 'Mínimo 3 carácteres.'),
		email: Yup.string()
			.email('Invalid email')
			.required('Por favor, escribe en email'),
		mensaje: Yup.string()
			.required('Por favor, escribe un mensaje.')
			.min(10, 'Mínimo 10 carácteres.'),
	})
	let initialValues = { asunto: '', email: '', mensaje: '' }

	return (
		<div className='MensajesHeader'>
			<Formik
				initialValues={initialValues}
				onSubmit={props.clickNuevo}
				validationSchema={validaciones}
			>
				{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
					<form onSubmit={handleSubmit} className='Formulario'>
						<input
							className='Elemento'
							placeholder='Asunto'
							type='text'
							name='asunto'
							onChange={handleChange}
							value={values.asunto}
						/>
						{errors.asunto ? <div>{errors.asunto}</div> : null}

						<input
							className='Elemento'
							placeholder='E-mail'
							type='email'
							name='email'
							onChange={handleChange}
							value={values.email}
						/>
						{errors.email ? <div>{errors.email}</div> : null}

						<input
							className='Elemento'
							placeholder='Mensaje'
							type='text'
							name='mensaje'
							onChange={handleChange}
							value={values.mensaje}
						/>
						{errors.mensaje ? <div>{errors.mensaje}</div> : null}

						<button className='Nuevo' type='submit'>
							Nuevo
						</button>
						{/* <button className="Nuevo" type="submit" disabled={isSubmitting}>Nuevo</button> */}
					</form>
				)}
			</Formik>
			{/* <button onClick={props.clickNuevo} className="Nuevo">Nuevo</button> */}
			<button onClick={props.clickEliminar} className='Vaciar'>
				Vaciar
			</button>
		</div>
	)
}
