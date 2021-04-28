import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect,
  Route
} from "react-router-dom";
import axios from 'axios';

import Header from "components/Header/Header";
import Courses from "pages/Courses/Courses";
import { Login } from "pages/Login/Login";
import { Registration } from "pages/Registration/Registration";
import { CourseInfo } from "components/CourseInfo/CourseInfo";

import { NewCourseForm } from "pages/NewCourseForm/NewCourseForm";
import { mockedCourseList, mockedAddAuthor } from "localService/Mock";

import './App.css';

function App() {
  const [user, setUser] = useState();
  const [isLogin, setLogin] = useState(false);
  const [courses, setCourses] = useState(mockedCourseList);
  const [authors, setAuthors] = useState(mockedAddAuthor);
  // const [courses, setCourses] = useState(mockedCourseList);

  useEffect(() => {
    const currentUser = window.localStorage.getItem("currentUser");
    if(currentUser) {
      setUser(JSON.parse(currentUser));
      setLogin(true);
    } else {
      return <Redirect to='/login' />
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
          method: 'GET',
          headers: { 
              'accept': '*/*'
              // 'Authorization': {token} 
          },
          url: `http://localhost:3000/courses/all`
      };
      try {
        const result = await axios(options);
        setCourses(result.data.result);
        console.log("FETCH RESULT", result)
      } catch(error) {
        console.log("ERROR", error)
      }
    }
    fetchData();
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
      <Router>
        <Header isLogin={isLogin} user={user} />
        <Route exact path={"/courses"}>
          <Courses courses={courses} authors={authors}/>
        </Route>
        <Route exact path={"/create-course"}>
          <NewCourseForm 
              onAddCourse={handleAddCourse}
              onAddAuthor={handleAddAuthors}/>
        </Route>
        <Route path={"/course-info/:id"}>
          <CourseInfo courses={courses} authors={authors}/>
        </Route>
        <Route exact path={"/login"}>
          <Login onChangeUser={handleChangeUser}/>
        </Route>
        <Route exact path={"/registration"}>
          <Registration />
        </Route>
        <Redirect from={"/"} to={"/courses"}/>
      </Router>
    </>
  );
}

export default App;
