import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import { useForm } from "react-hook-form";
import axios from 'axios';
// import { loginSchema } from "../../utils/validation";

import Button from 'components/Button/Button';
import Input from "components/Input/Input";
import Typography from '@material-ui/core/Typography';

import "./Login.css";



export const Login = ({ onChangeUser }) => {
    const [loginData, setloginData] = useState({});
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        return;
    }

    useEffect(() => {
      if(Object.keys(user).length !== 0) {
        const storage = window.localStorage;
        storage.setItem("currentUser", JSON.stringify(user));
        onChangeUser(user);
        <Redirect to="/courses"/>
      }
    }, [user])

    useEffect(()=>{
      console.log(loginData);
      const fetchData = async () => {
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify(loginData),
          url: "http://localhost:3000/login"
        };
        try {
          const result = await axios(options);
          setUser({...{loginData}, "token": result.data.result});
          alert("you are logged in")
          console.log("FETCH RESULT", result)
        } catch(error) {
          console.log("ERROR", error)
        }
      }
      fetchData();
    }, [loginData]);

    const createUser = async (event) => {
      event.preventDefault();
      let loginData = {
        email: email,
        password: password
      }
      // const isValid = await loginSchema.isValid(loginData)
      // .catch(function (err) {
      //   return err;
      // });
      setloginData(loginData);
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
                    helpText={"Empty field"}
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
                    onCkick={handleClick} 
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


// export function Login() {
//   const { register, handleSubmit, watch } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example"));


//   return (

//             <div className={"login-container"}>
//             <form className={"login-block"} onSubmit={handleSubmit(onSubmit)}>
//                 <Typography variant="h4" color="textSecondary" component="h4" >
//                     Login
//                 </Typography>
//                 <input defaultValue="test" {...register("example")} />
//                 {/* <input {...register("exampleRequired", { required: true })} /> */}
//                 {/* <Input lable="Email" type="email" {...register("email")} /> */}
//                 <Input lable="Password" type="text" {...register("password", { required: true })}/>
//                 <Button name="Login" variant="contained" color="primary" type="submit"/>
//                 <Typography variant="body2" color="textSecondary" component="h5" >
//                     If you not have an account you can <Link to={"/registration"}>Registration</Link>
//                 </Typography>
//             </form>
//         </div>

//   );
// }
