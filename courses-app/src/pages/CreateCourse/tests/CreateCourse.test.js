import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/index';

import CreateCourse from '../CreateCourse'


const authors = [
    {
        name: "author",
        id: "9b87e8b8-6ba5-40fc-a439-c4e30a373d36"
    },
    {
        name: "author2",
        id: "1c972c52-3198-4098-b6f7-799b45903199"
    }
];

test("Should show authors list", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CreateCourse authorsList={authors}/>
            </BrowserRouter>
        </Provider>
    ,)
    // console.log("CARDS", coursesComponent.queryByTestId("cards").getElementsByTagName("<CourseCard>").length)
    // console.log("CARDS", screen.findByTestId("cards"))
    // console.log("CARDS", screen.getByRole("Create Author"))
    // console.log("CARDS", screen.getByText("Create Author"))
    
    // expect(cards).toHaveLength(courses.length)
})

test.skip("Should add an author to all authors list.", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CreateCourse authors={authors}/>
            </BrowserRouter>
        </Provider>
    ,)

    console.log("CARDS", screen.getByRole("CourseCard"))
    
    // expect(cards).toHaveLength(courses.length)
})

test.skip("Should add an author to course authors list.", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CreateCourse authors={authors}/>
            </BrowserRouter>
        </Provider>
    ,)
    // fireEvent.handleAddAuthor() - можно ли так проверить?

    console.log("CARDS", screen.getByRole("CourseCard"))
    
    // expect(cards).toHaveLength(courses.length)
})

test.skip("Should delete an author from course authors list.", ()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <CreateCourse authors={authors}/>
            </BrowserRouter>
        </Provider>
    ,)
    // fireEvent.handleAddAuthor() - можно ли так проверить?

    console.log("CARDS", screen.getByRole("CourseCard"))
    
    // expect(cards).toHaveLength(courses.length)
})
