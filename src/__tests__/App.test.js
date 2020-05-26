import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the app component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('.App');
  expect(linkElement).toBeInTheDocument();
});
