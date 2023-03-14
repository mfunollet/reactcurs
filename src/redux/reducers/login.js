import { ACTIONS_LOGIN } from '../actions';

const initialState = {
  login: false,
};

const login = (state=initialState.login, action) => {
    switch(action.type){
        case ACTIONS_LOGIN.LOGIN:
            return !state;
        default:
            return state;
    }
}
export default login