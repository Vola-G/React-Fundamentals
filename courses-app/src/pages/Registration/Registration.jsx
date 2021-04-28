import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

import Button from 'components/Button/Button';
import Input from "components/Input/Input";
import Typography from '@material-ui/core/Typography';

import "./Registration.css";


export const Registration = () => {
    const [registrData, setRegistrData] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            return <Redirect to='/login' />
          }
          console.log("FETCH RESULT", result)
        } catch(error) {
          console.log("ERROR", error)
        }
      }
      fetchData();

    }, [registrData]);

    const createUser = (event) => {
      event.preventDefault();
      let registrData = {
        name: name,
        email: email,
        password: password
      }
      setRegistrData(JSON.stringify(registrData));
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
                    onChange={(nameValue)=>setName(nameValue)}
                    style={"form-item"}/>
                  <Input 
                    label="Email" 
                    type="email"
                    value={email}
                    onChange={(emailValue)=>setEmail(emailValue)}
                    style={"form-item"}/>
                  <Input 
                    label="Password" 
                    type="text"
                    value={password}
                    onChange={(passwordValue)=>setPassword(passwordValue)}
                    style={"form-item"}/>
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
