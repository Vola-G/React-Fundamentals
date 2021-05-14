import React, { useEffect } from 'react';
import { 
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { PrivateRoute } from "../helpers/PrivatRoute";

import { getCoursesThunk } from "store/courses/thunk";
import { getAuthorsThunk } from "store/author/thunk";
import { setCurrentUser } from "store/user/actionCreators";

import Header from "components/Header/Header";
import Courses from "pages/Courses/Courses";
import { Login } from "pages/Login/Login";
import { Registration } from "pages/Registration/Registration";
import CourseInfo from "components/CourseInfo/CourseInfo";
import UpdateCourse from "components/UpdateCourse/UpdateCourse";
import CreateCourse from "pages/CreateCourse/CreateCourse";

import './App.css';

const App = (props) => {
  const { isAuth } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = window.localStorage.getItem("currentUser");
    if(currentUser) {
      dispatch(setCurrentUser(currentUser))
    }
  }, []);

  useEffect(()=> {
    dispatch(getCoursesThunk())
    dispatch(getAuthorsThunk())
  }, [])

  return (
    <>
      <Header/>
        <Switch>
          <PrivateRoute path="/courses/add" component={CreateCourse}/>
          <PrivateRoute path="/courses/update/:courseId" component={UpdateCourse}/>
          <Route path="/courses/:courseId" component={CourseInfo}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
        { isAuth ? <Redirect from="/" to="/courses"/> : <Redirect from="/" to="/login"/> }
    </>
  );
}

App.propTypes = {
  getCourses: PropTypes.func,
  isAuth: PropTypes.bool
}

function mapStateToProps(state) {
    const user = state.userReducer
    return user
}

export default connect(mapStateToProps)(App);
