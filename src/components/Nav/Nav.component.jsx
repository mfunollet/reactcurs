import './Nav.component.scss'
import { Link } from 'react-router-dom'
//import LinkPropio from '../LinkPropio/LinkPropio.component'

export default function Nav() {
	return (
		<div className='Nav'>
			{/* <LinkPropio href='/' className='Nav-link'>
				Home
			</LinkPropio>
			<LinkPropio className='Nav-link' to='/mensajes'>
				Mensajes
			</LinkPropio> */}
			<Link className='Nav-link' to='/'>
				Home
			</Link>
			<Link className='Nav-link' to='/mensajes'>
				Mensajes
			</Link>
		</div>
	)
}
