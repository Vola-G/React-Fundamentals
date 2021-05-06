import { GET_AUTHORS, DELETE_AUTHOR, SAVE_AUTHOR } from "./actionTypes";

const authorsInitialState = {
    authors: []
};
   
export function authorsReducer(state = authorsInitialState, action) {
    switch(action.type) {
        case GET_AUTHORS: 
            return {
                ...state, 
                authors: [...state.authors, ...action.payload]
            }
        case DELETE_AUTHOR: 
            return {
                ...state, 
                authors: [...state.authors.filter(item => item.id !== action.payload)]
            }
        case SAVE_AUTHOR:
            return {
                ...state, 
                authors: [...state.authors, action.payload]
            }
        default:
            return state
    }
}
