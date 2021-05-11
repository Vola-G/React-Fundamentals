import { 
    GET_COURSES, 
    SAVE_COURSE,
    UPDATE_COURSE, 
    DELETE_COURSE 
} from "./actionTypes";

export const getCourses = (courses) => {
    return {
        type: GET_COURSES,
        payload: courses
    }
};

export const saveCourse = (newCourse) => {
    return {
        type: SAVE_COURSE,
        payload: newCourse
    }
}

export const updateCourse = () => {
    return {
        type: UPDATE_COURSE,
        payload: {}
    }
}

export const deleteCourse = (courseId) => {
    return {
        type: DELETE_COURSE,
        payload: courseId
    }
}
