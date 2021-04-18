import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Courses from "./components/Pages/Courses/Courses";
import { NewCourseForm } from "./components/Pages/NewCourseForm/NewCourseForm"

function App() {
  const [isCourses, setIsCourses] = useState(true);
  return (
    <>
      <Header/>
      {isCourses ? <Courses onAddCourse={()=>setIsCourses(!isCourses)}/> : <NewCourseForm onAddCourse={()=>setIsCourses(!isCourses)}/>}
    </>
  );
}

export default App;