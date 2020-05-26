import React from 'react';
import { render, act } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

jest.mock('axios');

test('renders the app component', async () => {
  let promise = Promise.resolve({
    data: { logged_in: true, user: {} },
  });
  axios.get.mockResolvedValue(promise);

  const { container, getByText } = render(<App />);

  expect(getByText('Loading...')).toBeInTheDocument();
  expect(container.firstChild).toHaveClass('Loading');
  await act(() => promise);
  expect(container.firstChild).toHaveClass('App');
});
