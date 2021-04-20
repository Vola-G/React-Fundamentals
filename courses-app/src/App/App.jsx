import './App.css';
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Courses from "../pages/Courses/Courses";
import { NewCourseForm } from "../pages/NewCourseForm/NewCourseForm";
import { mockedCourseList, mockedAddAuthor } from "../localService/Mock";

function App() {
  const coursesList = mockedCourseList;
  const [isCourses, setIsCourses] = useState(true);
  const [courses, setCourses] = useState(coursesList)

  function handleAddCourse(newCourse) {
    setCourses([...coursesList, newCourse])
  }

  return (
    <>
      <Header/>
      {isCourses ? <Courses coursesList={courses} onSwichPage={()=>setIsCourses(!isCourses)} /> : <NewCourseForm onSwichPage={()=>setIsCourses(!isCourses)} onAddCourse={(newCourse)=> handleAddCourse(newCourse)}/>}
    </>
  );
}

export default App;