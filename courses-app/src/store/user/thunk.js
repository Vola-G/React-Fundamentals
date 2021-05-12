import axios from 'axios';
import { 
    authorize,
    logOut
} from "./actionCreators";
import { Api } from "apis/userApi"

const storage = window.localStorage;
const apis = new Api();

export const registrationThunk = (registrData) =>{
    return async function() {
          try {
            const result = await axios(apis.getUser(registrData));
            if(result) {
              alert("you are registered");
              storage.setItem("registered", "true");
            }
          } catch(error) {
            console.log("ERROR", error)
          }
    }  
}

export const authorizeThunk = (loginData) =>{
    return async function(dispatch) {
        try {
            const result = await axios(apis.loginUser(loginData));
            const user = {
                isAuth: true,
                name: result.data.user.name,
                email: result.data.user.email,
                token: result.data.result
            }
            dispatch(authorize(user))
            storage.setItem("currentUser", JSON.stringify(user));
        }
        catch (error) {
            throw new Error("CANT LOGIN")
        }
    }  
}

export const logOutThunk = () =>{
    return async function(dispatch) {
        try {
            const result = await axios(apis.logoutUser());
            storage.removeItem("currentUser");
            dispatch(logOut())
        } catch (error) {
            throw new Error("CANT LOGOUT")
        }
    }  
}
