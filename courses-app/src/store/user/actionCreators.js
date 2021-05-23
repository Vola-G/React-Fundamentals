import { LOGIN, LOGOUT,  REGISTER, SET_USER_ROLE, SET_USER } from "./actionTypes";

export const login = (loginData) => {
    return {
        type: LOGIN,
        payload: loginData
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
    }
}

export const registration = () => {
    return {
        type: REGISTER
    }
}

export const setRole = (role) => {
    return {
        type: SET_USER_ROLE,
        payload: role
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_USER,
        payload: JSON.parse(user)
    }
}


