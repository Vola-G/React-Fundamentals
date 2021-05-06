import { LOGIN, LOGOUT } from "./actionTypes";

const userInitialState = {
    isAuth: false,
    name: "",
    email: "",
    token: ""
}
   
export function userReducer(state = userInitialState, action) {
    const { type, payload } = action
    switch(type) {
        case LOGIN: 
            // return {
            //     ...state, 
            //     user: payload
            // }
            return {
                ...state, 
                isAuth: payload.isAuth,
                name: payload.name,
                email: payload.email,
                token: payload.token
            }
        case LOGOUT:
            return {
                ...state,
                ...userInitialState
            }
        default:
            return state
    }
}
