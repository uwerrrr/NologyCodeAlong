import { screen, render, waitFor } from '@testing-library/react';
import JokesLoader from './JokeLoader';
import { JokeSearchContext } from '../../context/JokeSearchProvider';
import * as jokeServices from '../../services/joke-services';
import { vi } from 'vitest';

describe('JokeLoader', () => {
  it('should render loading text for a joke based on the context value', () => {
    const mockSearchValue = "apple";
    const mockedGetJokeBySearch = vi.spyOn(jokeServices, "getJokesBySearch");
    // getJokesBySearch is a function in jokeServices component

    mockedGetJokeBySearch.mockResolvedValue([
      { id: "a", joke: "Apples are funny" },
    ]);

    render(
      <JokeSearchContext.Provider value={{ jokeSearch: mockSearchValue }}>
        <JokesLoader />
      </JokeSearchContext.Provider>
    );
    
    const loadingText = screen.getByText(
      `Searching for jokes about: ${mockSearchValue}`
    );

    expect(loadingText).toBeInTheDocument();
  });




  it('should render a Joke List based on the resolved value', async () => {
    const mockSearchValue = 'apple';
    const mockedGetJokeBySearch = vi.spyOn(jokeServices, 'getJokesBySearch');
    mockedGetJokeBySearch.mockResolvedValue([
      { id: 'a', joke: 'Apples are funny' },
    ]);
    render(
      <JokeSearchContext.Provider value={{ jokeSearch: mockSearchValue }}>
        <JokesLoader />
      </JokeSearchContext.Provider>
    );
    const loadingText = screen.getByText(
      `Searching for jokes about: ${mockSearchValue}`
    );
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      // good to check that our loading state goes away
      expect(loadingText).not.toBeInTheDocument();
      const jokesHeading = screen.getByTitle('joke-heading');
      screen.debug();
      expect(jokesHeading).toBeInTheDocument();
    });
  });

  it('should render an error message if jokes fail to fetch', async () => {
    const mockSearchValue = 'apple';
    const mockedGetJokeBySearch = vi.spyOn(jokeServices, 'getJokesBySearch');
    mockedGetJokeBySearch.mockRejectedValue(new Error('Failed to fetch jokes'));
    render(
      <JokeSearchContext.Provider value={{ jokeSearch: mockSearchValue }}>
        <JokesLoader />
      </JokeSearchContext.Provider>
    );

    await waitFor(() => {
      const errorPara = screen.getByText('Failed to fetch jokes');
      screen.debug();
      expect(errorPara).toBeInTheDocument();
    });
  });
});
