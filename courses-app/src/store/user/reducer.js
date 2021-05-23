import { LOGIN, LOGOUT, SET_USER, SET_USER_ROLE } from "./actionTypes";

const userInitialState = {
    isAuth: false,
    name: "",
    email: "",
    token: "",
    role: ""
}
   
export function userReducer(state = userInitialState, action) {
    const { type, payload } = action
    switch(type) {
        case LOGIN: 
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
        case SET_USER: 
            return {
                ...state, 
                isAuth: payload.isAuth,
                name: payload.name,
                email: payload.email,
                token: payload.token
            }
        case SET_USER_ROLE:
            return {
                ...state,
                role: payload
            }
        default:
            return state
    }
}
