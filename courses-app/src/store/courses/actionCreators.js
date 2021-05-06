import { GET_COURSES, SAVE_COURSE, DELETE_COURSE } from "./actionTypes";
import axios from 'axios';

export const getCourses = () => async dispathc => {
    const options = {
        method: 'GET',
        headers: { 
            'accept': '*/*'
        },
        url: `http://localhost:3000/courses/all`
    };
    let response = await axios(options)
    let courses = response.data.result
    dispathc({ 
        type: GET_COURSES,
        payload: courses
    })
}

export const saveCourse = (newCourse) => {
    const options = {
        method: 'POST',
        headers: { 
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(newCourse),
        url: `http://localhost:3000/courses/add`
        
    };
    axios(options)
    return {
        type: SAVE_COURSE,
        payload: newCourse
    }
}

export const deleteCourse = (courseId) => {
    return {
        type: DELETE_COURSE,
        payload: courseId
    }
}
