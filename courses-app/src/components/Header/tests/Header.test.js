import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/index';

import Header from '../Header'

afterEach(()=> cleanup())

test("Should have logo", ()=> {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </Provider>
    )
    expect(getByTestId("header-logo")).toBeInTheDocument()
})

test("Should have user name", ()=> {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </Provider>
    )
    expect(getByTestId("header-user")).toHaveTextContent('Guest')
})

test("Should have button", ()=> {
    const {getByTestId} = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </Provider>
    )
    expect(getByTestId('header-button')).toBeInTheDocument();
})


