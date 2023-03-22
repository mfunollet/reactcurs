import { React } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useAuth = () => {
	const isLogged = useSelector((state) => state.login)
	//const [isLogged, setLogged] = useState(false)
	if (isLogged) {
		return true
	} else {
		return false
	}
}

export const ProtectedRoute = () => {
	const auth = useAuth()

	return auth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute
