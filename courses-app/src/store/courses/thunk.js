import {
    getCourses,
    saveCourse,
    updateCourse,
    deleteCourse
} from "./actionCreators";
import { Api } from 'api/api'


const api = new Api();

export const getCoursesThunk = () => {
    return async function(dispatch) {
        let response = await api.getCourses()
        let courses = await response.result
        return dispatch(getCourses(courses))
    };
};

export const saveCourseThunk = (newCourse) => {
    return async function(dispatch) {
        const { id, creationDate, ...rest} = newCourse
        const fetchData = rest;
        try {
            let response = await api.saveCourse(fetchData)
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
            let response = await api.updateCourse(fetchData, id)
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
            let response = await api.deleteCourse(courseId)
            return dispatch(deleteCourse(courseId))
        }
        catch(err) {
            throw new Error("CANT DELETE THE COURSE")
        }
    };
}
