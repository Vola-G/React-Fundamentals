import { LOGIN, LOGOUT } from "./actionTypes";
import axios from 'axios';

export const authorize = (loginData) => async dispatch => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify(loginData),
        url: "http://localhost:3000/login"
    };
    try {
        const result = await axios(options);
        const user = {
            isAuth: true,
            name: result.data.user.name,
            email: result.data.user.email,
            token: result.data.result
        }
        dispatch({
            type: LOGIN,
            payload: user
        })
        const storage = window.localStorage;
        storage.setItem("currentUser", JSON.stringify(user));
    }
    catch (error) {
        console.log(`Axios request failed: ${error}`);
    }
    
}

export const logOut = () => {
    const options = {
        method: 'DELETE',
        headers: { 
            'accept': '*/*'
        },
        url: "http://localhost:3000/logout"
    };
    axios(options);
    const storage = window.localStorage;
    storage.removeItem("currentUser");
    return ({
        type: LOGOUT
    })
}
