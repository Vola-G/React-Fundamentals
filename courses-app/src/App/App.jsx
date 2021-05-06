import React, { useState, useEffect } from 'react';
import { 
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { getCourses } from "store/courses/actionCreators";
import { getAuthors } from "store/author/actionCreators";

import Header from "components/Header/Header";
import Courses from "pages/Courses/Courses";
import Login from "pages/Login/Login";
import { Registration } from "pages/Registration/Registration";
import CourseInfo from "components/CourseInfo/CourseInfo";
import CreateCourse from "pages/CreateCourse/CreateCourse";

import './App.css';

const App = (props) => {
  const { isAuth } = props;
  const [user, setUser] = useState({isAuth: false, email: null});
  const [isLogin, setLogin] = useState(false);
  const [authors, setAuthors] = useState([]);
  const dispathc = useDispatch();

  useEffect(() => {
    const currentUser = window.localStorage.getItem("currentUser");
    if(currentUser) {
      const token = JSON.parse(currentUser).token
      setUser(JSON.parse(currentUser));
      token ? setLogin(true) : setLogin(false);
    }
  }, []);

  useEffect(()=> {
    dispathc(getCourses())
    dispathc(getAuthors())
  }, [])

  function handleAddAuthors(newAuthor) {
    setAuthors([...authors, newAuthor])
  }

  return (
    <>
      <Header user={user}/>
        <Switch>
          <Route path="/courses/add" component={CreateCourse}/>
            {/* <CreateCourse 
                // onAddCourse={handleAddCourse}
                onAddAuthor={handleAddAuthors}/>
          </Route> */}
          <Route path="/courses/:courseId" component={CourseInfo}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
        {isLogin ? <Redirect exact to="/courses"/> : <Redirect exact to="/login"/> }
        {isLogin ? console.log('ISLOGIN') : console.log('NOTLOGIN') }
        <Redirect from="/" to="/courses"/>
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

export default connect(mapStateToProps, {getCourses, getAuthors})(App);
