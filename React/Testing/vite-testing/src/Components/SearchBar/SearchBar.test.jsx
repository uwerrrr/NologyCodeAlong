import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { expect, vi } from 'vitest';

describe('SearchBar', () => {
  it('should call the submit function that is passed into, when submit button is clicked', async () => {
    const myFunction = vi.fn(() => console.log('search happens'));

    render(<SearchBar formSubmit={myFunction} />);
    const searchBtn = screen.getByRole('button');
    const user = userEvent.setup();
    await user.click(searchBtn);
    console.log(myFunction);
    expect(myFunction).toHaveBeenCalled();
  });

  it('should call the submit function with the value typed into the search bar', async () => {
    const myFunction = vi.fn((value) => console.log('Searched for: ' + value));

    render(<SearchBar formSubmit={myFunction} />);
    const searchBtn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, 'hello');
    await user.click(searchBtn);
    expect(myFunction).toHaveBeenCalledOnce();
    expect(myFunction.mock.calls[0][0]).toBe('hello');
  });

  it('should call the submit function multiple times, with the right value each time', async () => {
    const myFunction = vi.fn((value) => console.log("Searched for: " + value));

    render(<SearchBar formSubmit={myFunction} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    await user.click(searchBtn);
    await user.type(input, "goodbye");
    await user.click(searchBtn);
    expect(myFunction).toHaveBeenCalledTimes(2);
    
    expect(myFunction.mock.calls[0][0]).toBe("hello");
    // get 1st param of 1st called of the function
    expect(myFunction.mock.calls[1][0]).toBe("goodbye");
    // get 1st param of 2nd called of the function
  });

  it('should clear its value after search button clicked', async () => {
    const myFunction = (value) => console.log('Searched for: ' + value);
    render(<SearchBar formSubmit={myFunction} />);
    const searchBtn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, 'hello');
    expect(input.value).toBe('hello');
    await user.click(searchBtn);
    expect(input.value).toBe('');
  });
});
