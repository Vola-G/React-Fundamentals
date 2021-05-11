import { 
    authorize,
    logOut
} from "./actionCreators";
import axios from 'axios';

export const registrationThunk = (registrData) =>{
    return async function(dispatch) {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: registrData,
            url: "http://localhost:3000/register"
          };
          try {
            const result = await axios(options);
            if(result) {
              alert("you are registered");
              const storage = window.localStorage;
              storage.setItem("registered", "true");
            }
          } catch(error) {
            console.log("ERROR", error)
          }
    }  
}

export const authorizeThunk = (loginData) =>{
    return async function(dispatch) {
        const options = {
            method: 'POST',
            headers: { 
                'content-type': 'application/json' 
            },
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
            dispatch(authorize(user))
            const storage = window.localStorage;
            storage.setItem("currentUser", JSON.stringify(user));
        }
        catch (error) {
            throw new Error("CANT LOGIN")
        }
    }  
}

export const logOutThunk = () =>{
    return async function(dispatch) {
        const options = {
            method: 'DELETE',
            headers: { 
                'accept': '*/*'
            },
            url: "http://localhost:3000/logout"
        };
        try {
            const result = await axios(options);
            const storage = window.localStorage;
            storage.removeItem("currentUser");
            dispatch(logOut())
        } catch (error) {
            throw new Error("CANT LOGOUT")
        }
    }  
}
