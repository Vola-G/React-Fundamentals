import { 
    GET_COURSES, 
    SAVE_COURSE, 
    UPDATE_COURSE, 
    DELETE_COURSE 
} from "./actionTypes";

const coursesInitialState = {
    courses: []
}
   
export function coursesReducer(state = coursesInitialState, action) {
    if(action.type === "UPDATE_COURSE") {
        let index = state.courses.indexOf(state.courses.find(item => item.id === action.payload.id));
        state.courses[index] = action.payload
    }
    switch(action.type) {
        case GET_COURSES: 
            return {
                ...state, 
                courses: [...state.courses, ...action.payload]
            }
        case SAVE_COURSE:
            return {
                ...state, 
                courses: [...state.courses, action.payload]
            }
        case UPDATE_COURSE:
            return {
                ...state,
                courses: [...state.courses]
            }
        case DELETE_COURSE:
            return {
                ...state, 
                courses: [...state.courses.filter(item => item.id !== action.payload)]
            }
        default:
            return state
    }
}
