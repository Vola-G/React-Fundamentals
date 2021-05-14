import axios from 'axios';
import {
    getCourses,
    saveCourse,
    updateCourse,
    deleteCourse
} from "./actionCreators";
import { Api } from 'apis/coursesApi'


const user = window.localStorage.getItem("currentUser");
const token = user ? JSON.parse(user).token : '';

const apis = new Api(token);

export const getCoursesThunk = () => {
    return async function(dispatch) {
        let response = await axios(apis.getCourses())
        let courses = response.data.result
        return dispatch(getCourses(courses))
    };
};

export const saveCourseThunk = (newCourse) => {
    return async function(dispatch) {
        const { id, creationDate, ...rest} = newCourse
        const fetchData = rest;
        try {
            let response = await axios(apis.saveCourse(fetchData))
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
        try {
            let response = await axios(apis.updateCourse(fetchData, id))
            return dispatch(updateCourse(editedCourse))
        }
        catch(err) {
            throw new Error("CANT UPDATE THE COURSE")
        }
    };
}

export const deleteCourseThunk = (courseId) => {
    return async function(dispatch) {
        try {
            let response = await axios(apis.deleteCourse(courseId))
            return dispatch(deleteCourse(courseId))
        }
        catch(err) {
            throw new Error("CANT DELETE THE COURSE")
        }
    };
}
