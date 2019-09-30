import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions"
import { merge } from "lodash"


const sessionErrorReducer = (oldState=[], action) => {
    Object.freeze(oldState) 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { errors: action.errors })
        case RECEIVE_ERRORS: {
            let newState = []
            return newState }
        default:
            return oldState; 
    }
} 

export default sessionErrorReducer 