import login from './login'
import mensajes from './mensajes'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    mensajes: mensajes,
    login: login
})
export default allReducers