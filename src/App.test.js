import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import SingleMovie from '../SingleMovie';
import Home from '../Home';

test('renders Home component for "/" route', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Assuming Home component renders some content, you can check for that content.
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

test('renders SingleMovie component for "/movie/:id" route', () => {
  render(
    <Router initialEntries={['/movie/tt1640571']}>
      <SingleMovie />
    </Router>
  );

  // Assuming SingleMovie component renders some content, you can check for that content.
  expect(screen.getByText(/Movie Details/i)).toBeInTheDocument();
});

test('renders Error component for unknown routes', () => {
  render(
    <Router initialEntries={['/unknown']}>
      <App />
    </Router>
  );

  // Assuming Error component renders some content, you can check for that content.
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});