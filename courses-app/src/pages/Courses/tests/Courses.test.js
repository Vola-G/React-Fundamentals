import { render, screen, cleanup, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import {mockedCourseList, mockedAddAuthor} from '../../../localService/Mock';

import Courses from '../Courses'


test.skip("Should display amount of CourseCard equal length of courses array", ()=> {
    const container = render(
        <Provider store={store}>
            <BrowserRouter>
                <Courses courses={mockedCourseList} authors={mockedAddAuthor}>
                </Courses>
            </BrowserRouter>
        </Provider>
    ,)
    // expect(container.children.length).toBe(1);
    // console.log("CARDS", container.queryByTestId("cards").getElementsByTagName("<CourseCard>").length)
    
    // console.log("TAG", container.getByTestId("card"))
    // expect(cards).toHaveLength(courses.length)
})

test.skip("Should show CreateCourse page after a click on a button 'Add new course'", ()=> {
    const {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <Courses courses={mockedCourseList} authors={mockedAddAuthor}/>
            </BrowserRouter>
        </Provider>
    )
    const button = screen.getByText("Add author");
    console.log("BUTTON", button)
    // fireEvent.click(button)
    // expect(window.location.href).toEqual("http://localhost/courses/add")
})


