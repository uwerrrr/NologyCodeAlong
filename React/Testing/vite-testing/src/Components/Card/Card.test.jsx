import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("Card Component", () => {
  it("Should render a heading from props", () => {
    // 1. Simulate render of the component (with props if needed)
    render(<Card heading="Hello world" content="test" />);

    // 2. Grab element rendered on screen
    const heading = screen.getByText(/hello world/i);

    // 3. Set expected results/ behaviors
    expect(heading).toBeInTheDocument();
  });

  it("Should render a button", () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  it('Should render "show" button text when content is hidden by default', () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent(/show/i);
  });

  it("To hide content by default", () => {
    render(<Card heading="Hello world" content="test" />);
    const content = screen.queryByText(/test/i);
    // this will return null instead of throw error if using getByText

    expect(content).not.toBeInTheDocument();
  });

  it("Should toggle the content on button click", async () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    // console.log('BEFORE CLICK');
    // screen.debug();
    await user.click(btn);
    // console.log('AFTER CLICK');
    // screen.debug();
    const content = screen.getByText(/test/i);
    expect(content).toBeInTheDocument();
    await user.click(btn);
    expect(content).not.toBeInTheDocument();
  });

  // with user event -> func returns a promise
  it("Should update the button text after click", async () => {
    // 1. Simulate render of the component (with props if needed)
    render(<Card heading="Hello world" content="test" />);

    // 2. set user event
    const user = userEvent.setup();

    // 3. grab and expect renders BEFORE user interaction
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent(/show/i);

    // 4.  Set user action -> needs await b/c it returns a promise
    await user.click(btn);
    // user.click(btn) returns promise

    // 5. Set expected results/ behaviors AFTER user interaction
    expect(btn).toHaveTextContent(/hide/i);
  });
});
