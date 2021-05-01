import { createStore } from "redux";


const store = {
    user: {
        isAuth: false,
        name: "",
        email: "",
        token: "string"
    },
    courses: [],
    authors: [] 
}

const reducer = (state) => state;

export default createStore(reducer, store)
