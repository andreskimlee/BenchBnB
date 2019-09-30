import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash" 


const defaultState = {
    id: null 
}

const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    switch (action.type) {  
        case RECEIVE_CURRENT_USER: 
            return merge({}, oldState, { id: action.user.id })
        case LOGOUT_CURRENT_USER: 
            return merge({}, oldState, { id: null })
        default:
         return oldState; 
    }
}

export default sessionReducer; 
