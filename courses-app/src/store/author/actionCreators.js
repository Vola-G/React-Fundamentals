import { GET_AUTHORS, SAVE_AUTHOR, DELETE_AUTHOR } from "./actionTypes";
import axios from 'axios';

export const getAuthors = () => async dispathc => {
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
        dispathc({ 
            type: GET_AUTHORS,
            payload: authors
        })
    } catch(error) {
        console.log("GET_AUTHORS ERROR", error)
    }
}

export const saveAuthors = (newAuthor) => async dispathc => {
    const authorName = {name: newAuthor.name}
    const options = {
        method: 'POST',
        headers: { 
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(authorName),
        url: `http://localhost:3000/authors/all`
    };
    try {
        let response = await axios(options)
        console.log(response);
    } catch(error) {
        console.log("GET_AUTHORS ERROR", error)
    }
    dispathc({ 
        type: SAVE_AUTHOR,
        payload: newAuthor
    })
}
