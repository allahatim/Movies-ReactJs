import { render, screen, fireEvent } from '@testing-library/react';
import { useGlobalContext } from './context';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';
import Search from './Search';

test('renders Error component', () => {
  render(<Error />);
  
  // Assert that the Error component is rendered
  const errorElement = screen.getByText(/Error/i);
  expect(errorElement).toBeInTheDocument();
});
jest.mock('./context.js');
test('renders search input and handles query change', () => {
    const mockSetQuery = jest.fn();
    const mockIsError = { show: false, msg: '' };
    useGlobalContext.mockReturnValue({ query: '', setQuery: mockSetQuery, isError: mockIsError });

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    // Assert that the search input is rendered
    const searchInput = screen.getByPlaceholderText('Enter movie name...');
    expect(searchInput).toBeInTheDocument();

    // Simulate typing in the search input
    fireEvent.change(searchInput, { target: { value: 'Avengers' } });

    // Assert that the setQuery function is called with the correct value
    expect(mockSetQuery).toHaveBeenCalledWith('Avengers');
  });