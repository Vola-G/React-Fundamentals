import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { authorize } from "../../store/user/actionCreators";

import Button from 'components/Button/Button';
import Input from "components/Input/Input";
import Typography from '@material-ui/core/Typography';

import "./Login.css";


const Login = ({ authorize }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const createUser = async (event) => {
      event.preventDefault();
      let loginData = {
        email: email,
        password: password
      }
      await authorize(loginData)
      history.push("/courses")
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
                    onChange={(emailValue)=>setEmail(emailValue)}
                    helperText={""}
                    />
                  <Input 
                    label="Password" 
                    type="text"
                    value={password}
                    style={"form-item"} 
                    onChange={(passValue)=>setPassword(passValue)}
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

export default connect(null, {authorize})(Login)
