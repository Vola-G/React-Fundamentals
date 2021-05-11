import { LOGIN, LOGOUT, SET_USER, REGISTER } from "./actionTypes";

export const authorize = (loginData) => {
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

export const setCurrentUser = (user) => {
    return {
        type: SET_USER,
        payload: JSON.parse(user)
    }
}
