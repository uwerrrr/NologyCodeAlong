export const getJokesBySearch = async (searchString) => {
  const response = await fetch(
    'https://icanhazdadjoke.com/search?term=' + searchString,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch jokes');
  }
  const data = await response.json();
  if (data.results.length === 0) {
    throw new Error('No jokes found for ' + searchString);
  }
  return data.results;
};
