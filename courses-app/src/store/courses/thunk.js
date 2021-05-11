import {
    getCourses,
    saveCourse,
    updateCourse,
    deleteCourse
} from "./actionCreators"
import axios from 'axios';


const user = window.localStorage.getItem("currentUser");
const token = JSON.parse(user).token

export const getCoursesThunk = () => {
    return async function(dispatch) {
        const options = {
            method: 'GET',
            headers: { 
                'accept': '*/*'
            },
            url: `http://localhost:3000/courses/all`
        };
        let response = await axios(options)
        let courses = response.data.result
        return dispatch(getCourses(courses))
    };
};

export const saveCourseThunk = (newCourse) => {
    return async function(dispatch) {
        const { id, creationDate, ...rest} = newCourse
        const fetchData = rest;
        const options = {
            method: 'POST',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: JSON.stringify(fetchData),
            url: `http://localhost:3000/courses/add`
        };
        try {
            let response = await axios(options)
            return dispatch(saveCourse(newCourse))
        }
        catch(err) {
            throw new Error("CANT SAVE THE COURSE")
        }
    };
}

export const updateCourseThunk = (editedCourse) => {
    return async function(dispatch) {
        const { id, creationDate, ...rest} = editedCourse
        const fetchData = rest;
        const options = {
            method: 'PUT',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: JSON.stringify(fetchData),
            url: `http://localhost:3000/courses/${id}`
        };
        try {
            let response = await axios(options)
            return dispatch(updateCourse(editedCourse))
        }
        catch(err) {
            throw new Error("CANT UPDATE THE COURSE")
        }
    };
}

export const deleteCourseThunk = (courseId) => {
    return async function(dispatch) {
        const options = {
            method: 'DELETE',
            headers: { 
                'accept': '*/*',
                'Authorization': token
            },
            data: courseId,
            url: `http://localhost:3000/courses/${courseId}`
        };
        try {
            let response = await axios(options)
            return dispatch(deleteCourse(courseId))
        }
        catch(err) {
            throw new Error("CANT DELETE THE COURSE")
        }
    };
}
