import './App.css';
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Courses from "../pages/Courses/Courses";
import { NewCourseForm } from "../pages/NewCourseForm/NewCourseForm";
import { mockedCourseList, mockedAddAuthor } from "../localService/Mock";

function App() {
  const coursesList = mockedCourseList;
  const authorsList = mockedAddAuthor;
  const [isCourses, setIsCourses] = useState(true);
  const [courses, setCourses] = useState(coursesList);
  const [authors, setAuthors] = useState(authorsList);

  function handleAddCourse(newCourse) {
    setCourses([...courses, newCourse])
  }

  function handleAddAuthors(newAuthor) {
    setAuthors([...authors, newAuthor])
  }

  return (
    <>
      <Header/>
      {isCourses ? 
        <Courses courses={courses} authors={authors} onSwichPage={()=>setIsCourses(!isCourses)} /> : 
        <NewCourseForm 
          onSwichPage={()=>setIsCourses(!isCourses)} 
          onAddCourse={(newCourse)=> handleAddCourse(newCourse)}
          onAddAuthor={(newAuthor)=> handleAddAuthors(newAuthor)}
        />
      }
    </>
  );
}

export default App;