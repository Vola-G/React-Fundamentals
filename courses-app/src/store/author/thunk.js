import axios from 'axios';
import {
    getAuthors,
    saveAuthors
} from "./actionCreators"
import { Api } from "apis/authorsApi"


const user = window.localStorage.getItem("currentUser");
const token = user ? JSON.parse(user).token : '';
const apis = new Api(token);

export const getAuthorsThunk = () => {
    return async function(dispathc) {
        try {
            let response = await axios(apis.getAuthors());
            let authors = response.data.result
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
            let response = await axios(apis.saveAuthors(authorName));
            let authors = response.data.result
            return dispathc(saveAuthors(authors))
        } catch(error) {
            throw new Error("CANT SAVE AUTHOR")
        }
    }
}


