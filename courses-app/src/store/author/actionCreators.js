import { GET_AUTHORS, SAVE_AUTHOR, DELETE_AUTHOR } from "./actionTypes";

export const getAuthors = (authors) => {
    return { 
        type: GET_AUTHORS,
        payload: authors
    }
}

export const saveAuthors = (newAuthor) => {
    return { 
        type: SAVE_AUTHOR,
        payload: newAuthor
    }
}
