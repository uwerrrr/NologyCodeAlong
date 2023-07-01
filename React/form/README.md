# Forms

- One of the biggest ways of interacting with our users
- A large part of your job as a web developer
- Forms seem easy, but can get complicated very quickly
- When it comes to react there are two major ideas about forms
  - Controlled Forms/Components
  - Using DOM refs

## Controlled Forms/Components

- A controlled component's value is determined by it's state
- Our application keeps track of the form's state and sets the value based on it

### Pros

- We get finely grained control of the form.
  - We can render things conditionally based on the form state
- Good for very complex problems

### Cons

- Many rerenders _can_ affect performance
- Complex state management
- Might need effects

## DOM Refs

- A ref is when we actually reference the DOM
- To reference the actual DOM from react we need the `useRef` hook
- We need to use the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) web API

### Pros

- Way less renders
- Less likely to need effects

### Cons

- Less control
- No conditional rendering based on form values
- A bit more complexity with form submission

## Use a library

- Take the focus away from writing boilerplate code and start solving buisness problems

### Pros

- You don't need to reinvent the wheel
- Common problems are likely to have been solved already
- Often the solutions are super optimised

### Cons

- Documentation might be dense
- We have less understanding of how the code works
- Library might stop being maintained (could stop working)
- Add to our package size

### Form Libraries in 2023

- Formik, had a big period of downtime. Looked like it might no long be maintained for a while
- Redux Form, requires you to use Redux. Whole application doesn't need to know about form state
- **React Hook Form**
  - Excellent documentation
  - Very regularly updated
  - Australian (Sydney) based dev
  - Perfomance focused
  - Uses refs mostly
  - Good typescript support
  - Customisable with other libraries (esp validation)
