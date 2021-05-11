import {
    getAuthors,
    saveAuthors
} from "./actionCreators"
import axios from 'axios';


const user = window.localStorage.getItem("currentUser");
const token = JSON.parse(user).token

export const getAuthorsThunk = () => {
    return async function(dispathc) {
        const options = {
            method: 'GET',
            headers: { 
                'accept': '*/*'
            },
            url: `http://localhost:3000/authors/all`
        };
        try {
            let response = await axios(options);
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
        const options = {
            method: 'POST',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: JSON.stringify(authorName),
            url: `http://localhost:3000/authors/add`
        };
        try {
            let response = await axios(options);
            let authors = response.data.result
            return dispathc(saveAuthors(authors))
        } catch(error) {
            throw new Error("CANT SAVE AUTHOR")
        }
    }
}


