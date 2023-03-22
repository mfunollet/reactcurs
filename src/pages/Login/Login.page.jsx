import './Login.page.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginLogout } from '../../redux/actions'

export default function Login(props) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLogged = useSelector((state) => state.login)
	let logear = (values) => {
		//Miro si l'usuari i contrasneya coincideixen
		let usersArray = JSON.parse(localStorage.getItem('users')) || []
		const userExists = usersArray.find(({ email }) => email === values.email)
		if (userExists) {
			//comprovo el password
			if (userExists.password === values.password) {
				dispatch(loginLogout())
				navigate('/mensajes')
				alert('Login hecho correctamente!')
			} else {
				alert('La contraseña no es correcta!')
			}
		} else {
			alert('Los datos no son correctos!')
		}
	}
	let logout = () => {
		dispatch(loginLogout())
	}
	let register = (values) => {
		// Inicialitzo un array amb el usuaris
		let usersArray = JSON.parse(localStorage.getItem('users')) || []

		let user_data = {
			email: values.email,
			password: values.password,
		}
		// Miro si l'usuari ja existeix i mostro alert, sino l'afegeixo
		if (usersArray.find(({ email }) => email === user_data.email)) {
			alert('El usuario ya existe!')
		} else {
			usersArray.push(user_data)
			localStorage.setItem('users', JSON.stringify(usersArray))
			alert('Usuario registrado correctamente!')
		}
	}
	const validacionesLogin = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Por favor, escribe en email'),
		password: Yup.string()
			.required('Por favor, escribe una contraseña.')
			.min(5, 'Mínimo 5 carácteres.'),
	})
	const validacionesRegister = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Por favor, escribe en email'),
		password: Yup.string()
			.required('Por favor, escribe una contraseña.')
			.min(5, 'Mínimo 5 carácteres.'),
	})
	let initialValues = { email: '', password: '' }

	return (
		<>
			{isLogged ? (
				<div className='panel'>
					<h1>Dashboard</h1>
					<button onClick={logout} className='Nuevo'>
						Desconectar
					</button>
				</div>
			) : (
				<div className='formLogin'>
					<h1>Login</h1>
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => {
							logear(values)
						}}
						validationSchema={validacionesLogin}
					>
						{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
							<form onSubmit={handleSubmit} className='Formulario'>
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
									placeholder='Password'
									type='password'
									name='password'
									onChange={handleChange}
									value={values.password}
								/>
								{errors.password ? <div>{errors.password}</div> : null}

								<button className='Nuevo' type='submit'>
									Login
								</button>
							</form>
						)}
					</Formik>
					<hr />
					OR
					<hr />
					<h1>Register</h1>
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => {
							register(values)
						}}
						validationSchema={validacionesRegister}
					>
						{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
							<form onSubmit={handleSubmit} className='Formulario'>
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
									placeholder='Password'
									type='password'
									name='password'
									onChange={handleChange}
									value={values.passwordRegister}
								/>
								{errors.password ? <div>{errors.password}</div> : null}

								<button className='Nuevo' type='submit'>
									Register
								</button>
							</form>
						)}
					</Formik>
				</div>
			)}
		</>
	)
}
