import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Button from 'components/Button/Button';
import Input from "components/Input/Input";
import Typography from '@material-ui/core/Typography';

import { useNameValidation,
  useEmailValidation,
  usePassValidation
 } from "../../utils/validation";

import "./Registration.css";


export const Registration = () => {
    const [registrData, setRegistrData] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameWarning, setNameWarning] = useState("");
    const [emailWarning, setEmailWarning] = useState("");
    const [passWarning, setPassWarning] = useState("");
    const [isNameValid, setNameValid] = useState(false);
    const [isPassValid, setPassValid] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);

    const handleClick = () => {
        return;
    }

    useEffect(()=>{
      console.log(registrData);
      const fetchData = async () => {
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
      fetchData();

    }, [registrData]);

    const createUser = (event) => {
      event.preventDefault(); 
      if(isNameValid && isPassValid && isEmailValid) {
        let registrData = {
          name: name,
          email: email,
          password: password
        }
        setRegistrData(JSON.stringify(registrData));
      } else {
        alert("Incorrect registration data")
      }
    }

    function handleNameChange(newName) {
      setName(newName);
      const isValid = useNameValidation(newName);
      setNameValid(isValid);
      isValid ? setNameWarning("") : setNameWarning("Enter your name");
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
                  Registration
              </Typography>
              <form  className={"login-form"} onSubmit={createUser}>
                  <Input 
                    label="Name" 
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    style={"form-item"}
                    helperText={nameWarning}
                    />
                  <Input 
                    label="Email" 
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    style={"form-item"}
                    helperText={emailWarning}
                    />
                  <Input 
                    label="Password" 
                    type="text"
                    value={password}
                    onChange={handlePassChange}
                    style={"form-item"}
                    helperText={passWarning}
                    />
                  <Button 
                    name="Registration" 
                    variant="contained" 
                    color="primary" 
                    onCkick={handleClick} 
                    type="submit" 
                    style={"form-item"}/>
                  <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="h5" 
                    className={"form-item"}>
                      If you have an account you can <Link to={"/login"}>Login</Link>
                  </Typography>
              </form>
          </div>
        </div>
    )  
}
