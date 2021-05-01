import React, { useState, useEffect } from 'react';
import { 
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import axios from 'axios';

import Header from "components/Header/Header";
import Courses from "pages/Courses/Courses";
import { Login } from "pages/Login/Login";
import { Registration } from "pages/Registration/Registration";
import { CourseInfo } from "components/CourseInfo/CourseInfo";

import { NewCourseForm } from "pages/NewCourseForm/NewCourseForm";
// import { mockedCourseList, mockedAddAuthor } from "localService/Mock";

import './App.css';

function App() {
  const [user, setUser] = useState();
  const [isLogin, setLogin] = useState(false);
  // const [isRegistered, setRegistered] = useState(false);
  const [courses, setCourses] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const currentUser = window.localStorage.getItem("currentUser");
    if(currentUser) {
      const token = JSON.parse(currentUser).token
      setUser(JSON.parse(currentUser));
      token ? setLogin(true) : setLogin(false);
    }
    const registered = window.localStorage.getItem("registered");
    console.log(registered)
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      const options = {
          method: 'GET',
          headers: { 
              'accept': '*/*'
          },
          url: `http://localhost:3000/courses/all`
      };
      try {
        const result = await axios(options);
        setCourses(result.data.result);
      } catch(error) {
        alert(error.message)
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      const options = {
          method: 'GET',
          headers: { 
              'accept': '*/*'
          },
          url: `http://localhost:3000/authors/all`
      };
      try {
        const result = await axios(options);
        setAuthors(result.data.result)
        console.log("FETCH RESULT", result)
      } catch(error) {
        console.log("ERROR", error)
      }
    }
    fetchAuthors();
  }, []);

  function handleAddCourse(newCourse) {
    setCourses([...courses, newCourse])
  }

  function handleChangeUser(newUser) {
    setUser(newUser);
    setLogin(true);
  }

  function handleAddAuthors(newAuthor) {
    setAuthors([...authors, newAuthor])
  }

  return (
    <>
      <Header isLogin={isLogin} user={user} />
        <Switch>
          <Route path="/courses/add">
            <NewCourseForm 
                onAddCourse={handleAddCourse}
                onAddAuthor={handleAddAuthors}/>
          </Route>
          <Route path="/courses/:courseId">
            <CourseInfo courses={courses} authorsList={authors}/>
          </Route>
          <Route path="/courses">
            <Courses courses={courses} authors={authors}/>
          </Route>
          <Route path="/login">
            <Login onChangeUser={handleChangeUser}/>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
        <Redirect from="/" to="/courses"/>
        {isLogin ? <Redirect to="/courses"/> : <Redirect to="/login"/> }
    </>
  );
}

export default App;
