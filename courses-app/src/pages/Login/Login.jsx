import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import { authorizeThunk } from "../../store/user/thunk";

import { useEmailValidation,
  usePassValidation
 } from "../../utils/validation";

import Button from 'components/Button/Button';
import Input from "components/Input/Input";
import Typography from '@material-ui/core/Typography';

import "./Login.css";


export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [passWarning, setPassWarning] = useState("");
  const [isPassValid, setPassValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false)


    const createUser = (event) => {
      event.preventDefault();
      if(isPassValid && isEmailValid) {
        let loginData = {
          email: email,
          password: password
        }
        dispatch(authorizeThunk(loginData))
        history.push("/courses")
      }else {
        alert("Incorrect login data")
      }
    }

    function handleEmailChange(newEmail) {
      setEmail(newEmail)
      const isValid = useEmailValidation(newEmail)
      setEmailValid(isValid)
      isValid ? setEmailWarning("") : setEmailWarning("Enter a valid email address")
    }

    function handlePassChange(newPass) {
      setPassword(newPass)
      const isValid = usePassValidation(newPass)
      setPassValid(isValid)
      isValid ? setPassWarning("") : setPassWarning("Password must be more than 6 characters");
    }

    return (
        <div className={"login-container"}>
          <div className={"login-block"}>
              <Typography variant="h4" color="textSecondary" component="h4" >
                  Login
              </Typography>
              <form  className={"login-form"} onSubmit={createUser}>
                  <Input 
                    label="Email" 
                    type="email"
                    value={email}
                    style={"form-item"} 
                    onChange={handleEmailChange}
                    helperText={emailWarning}
                    />
                  <Input 
                    label="Password" 
                    type="text"
                    value={password}
                    style={"form-item"} 
                    onChange={handlePassChange}
                    helperText={passWarning}
                    />
                  <Button 
                    name="Login" 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    className={"form-item"}/>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="h5" 
                    className={"form-item"}>
                      If you not have an account you can <Link to={"/registration"}>Registration</Link>
                  </Typography>
              </form>
          </div>
        </div>
    )  
}

Login.propTypes = {
  authorize: PropTypes.func.isRequired,
}
