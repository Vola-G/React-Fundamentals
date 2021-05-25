import { 
    login,
    logOut,
    setRole
} from "./actionCreators";
import { Api } from 'api/api'


const api = new Api();
const storage = window.localStorage;


export const registrationThunk = async (registrData) => {
    return async function() {
          try {
            const result = await api.getUser(registrData);
            if(result) {
              alert("you are registered");
              storage.setItem("registered", "true");
              return result
            }
          } catch(error) {
            return error
          }
    }  
}

export const loginThunk = (loginData) => {
    return async function(dispatch) {
        try {
            const result = await api.loginUser(loginData);
            const user = {
                isAuth: true,
                name: result.user.name,
                email: result.user.email,
                token: result.result
            }
            dispatch(login(user))
            const authorization = await api.authorizeUser();
            user["role"] = authorization.result.role;
            dispatch(setRole(authorization.result.role))
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
            const result = await api.logoutUser();
            storage.removeItem("currentUser");
            dispatch(logOut())
        } catch (error) {
            throw new Error("CANT LOGOUT")
        }
    }  
}
