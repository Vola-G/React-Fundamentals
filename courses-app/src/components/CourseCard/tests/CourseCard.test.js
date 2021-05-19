import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/index';

import {CourseCard} from '../CourseCard'

const course = {
    title: "HTML5",
    description: "This course is designed to help the novice who wants to gain confidence and knowledge. We will explore the theory (what actually happens when you click on a link on a webpage?), the practical (what do I need to know to make my own page?), and the overlooked (I have a page, what do I do now?). Throughout the course there will be a strong emphasis on adhering to syntactic standards for validation and semantic standards to promote wide accessibility for users with disabilities.",
    creationDate: "9/3/2021",
    duration: 30,
    authors: [
        "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
        "1c972c52-3198-4098-b6f7-799b45903199"
    ],
    id: "66cc289e-6de9-49b2-9ca7-8b4f409d6467"
};

const authors = [
    {
        name:"author",
        id:"9b87e8b8-6ba5-40fc-a439-c4e30a373d36"
    },
    {
        name: "author2",
        id: "1c972c52-3198-4098-b6f7-799b45903199"
    }
];

afterEach(()=> cleanup())

test("Should display title", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CourseCard course={course} authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    ,)
    const cardTitle = screen.getByTestId('card-title');
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent('HTML5')
})

test("Should display description", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CourseCard course={course} authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    )
    const cardDescription = screen.getByTestId('card-description');
    expect(cardDescription).toBeInTheDocument();
})

test("Should display piped duration", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CourseCard course={course} authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    )
    const cardDuration = screen.getByTestId('card-duration').textContent;
    expect(cardDuration).toMatch(/^Duration:\s\d{2,}:\d{2}$/)
})

test("Should display authors list", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CourseCard course={course} authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    )
    const cardAuthors = screen.getByTestId('card-authors');
    expect(cardAuthors).toHaveTextContent('Authors: author, author2')
})

test("Should display created date", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CourseCard course={course} authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    )
    const cardCreationDate = screen.getByTestId('card-creationDate').textContent;
    expect(cardCreationDate).toMatch(/^Created:\s\d{1,2}\/\d{1,2}\/\d{4}$/)
})
