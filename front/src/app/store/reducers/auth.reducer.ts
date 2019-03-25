import { ActionTypes, Actions } from '../actions/auth.actions';

export const initialState = '';

export function authReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.Success:
            state = action.token;
            window.sessionStorage.setItem('pgAcessToken', state);
            return state;

        case ActionTypes.Logout:
        case ActionTypes.Failure:
            state = '';
            window.sessionStorage.removeItem('pgAcessToken');
            return state;

        default:
            return state;
    }
}
