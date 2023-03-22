import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Nav from './components/Nav/Nav.component'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.component'
import Login from './pages/Login/Login.page'
import Messages from './pages/Messages/Messages.page'
import Nav from './components/Nav/Nav.component'
//import Mensajes from './views/Mensajes.view'

export default function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route path='/' element={<ProtectedRoute />}>
						<Route exact path='/mensajes' element={<Messages />} />
					</Route>
				</Routes>
			</BrowserRouter>

			{/* <div className='App-body'>
				<Mensajes />
			</div> */}
		</div>
	)
}
