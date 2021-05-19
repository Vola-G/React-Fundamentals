import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../store/index';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />      
      </BrowserRouter>
    </Provider>
  );
  expect(getByText(/Courses-App/i)).toBeInTheDocument();
});
