import {coursesReducer} from "../reducer"

const coursesInitialState = {
    courses: []
}

const courses = [{
    title: "HTML5",
    description: "This course is designed to help the novice who wants to gain confidence and knowledge. We will explore the theory (what actually happens when you click on a link on a webpage?), the practical (what do I need to know to make my own page?), and the overlooked (I have a page, what do I do now?). Throughout the course there will be a strong emphasis on adhering to syntactic standards for validation and semantic standards to promote wide accessibility for users with disabilities.",
    creationDate: "9/3/2021",
    duration: 30,
    authors: [
        "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
        "1c972c52-3198-4098-b6f7-799b45903199"
    ],
    id: "66cc289e-6de9-49b2-9ca7-8b4f409d6467"
}];

test("Should return the initial state", ()=> {
    expect(coursesReducer(undefined, {})).toEqual(coursesInitialState);
})

test("Should return the initial state", ()=> {
    const action = {
        type: "SAVE_COURSE",
        payload: courses
    }
    expect(coursesReducer(undefined, action)).toEqual({"courses": [courses]});
})

test("Should handle ADD_COURSES", ()=> {
    const action = {
        type: "SAVE_COURSE",
        payload: courses
    }
    expect(coursesReducer(undefined, action)).toEqual({"courses": [courses]});
})

test("Should handle GET_COURSES", ()=> {
    const action = {
        type: "GET_COURSES",
        payload: courses
    }
    expect(coursesReducer({"courses": courses}, action)).toEqual({"courses": [courses[0], courses[0]]});
})
