import {
    getAuthors,
    saveAuthors
} from "./actionCreators"
import { Api } from 'api/api'


const api = new Api();


const user = window.localStorage.getItem("currentUser");
const token = user ? JSON.parse(user).token : '';
const apis = new Api(token);

export const getAuthorsThunk = () => {
    return async function(dispathc) {
        try {
            let response = await api.getAuthors();
            let authors = response.result
            return dispathc(getAuthors(authors))
        } catch(error) {
            throw new Error("CANT GET AUTHORS")
        }
    }
}

export const saveAuthorsThunk = (newAuthor) => {
    return async function(dispathc) {
        const authorName = {name: newAuthor}
        try {
            let response = await api.saveAuthors(authorName);
            let authors = response.result
            return dispathc(saveAuthors(authors))
        } catch(error) {
            throw new Error("CANT SAVE AUTHOR")
        }
    }
}


