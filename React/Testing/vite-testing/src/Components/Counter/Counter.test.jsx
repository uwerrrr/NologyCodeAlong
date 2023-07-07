import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  it('Should render a title', () => {
    render(<Counter />);
    const title = screen.getByText(/count/i);
    expect(title).toBeInTheDocument();
  });

  it('Should render count as 0 when not passed props', () => {
    render(<Counter />);
    const count = screen.getByTitle('count');
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('0');
  });

  it('Should render count span with initial count prop', () => {
    render(<Counter initialCount={10} />);
    const count = screen.getByTitle('count');
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('10');
  });

  it('Should increase count when increase button is clicked', async () => {
    render(<Counter />);
    const count = screen.getByTitle('count');
    const user = userEvent.setup();
    const btn = screen.getByTestId('increaseButton');
    expect(count).toHaveTextContent('0');
    await user.click(btn);
    expect(count).toHaveTextContent('1');
    await user.click(btn);
    expect(count).toHaveTextContent('2');
  });

  it('Should decrease count when decrease button is clicked', async () => {
    render(<Counter initialCount={5} />);
    const count = screen.getByTitle('count');
    const user = userEvent.setup();
    const btn = screen.getByTestId('decreaseButton');
    expect(count).toHaveTextContent('5');
    await user.click(btn);
    expect(count).toHaveTextContent('4');
    await user.click(btn);
    expect(count).toHaveTextContent('3');
  });

  it('Should reset count when reset button is clicked', async () => {
    render(<Counter initialCount={5} />);
    const count = screen.getByTitle('count');
    const user = userEvent.setup();
    const btn = screen.getByTestId('resetButton');
    expect(count).toHaveTextContent('5');
    await user.click(btn);
    expect(count).toHaveTextContent('0');
  });
});
