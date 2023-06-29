# Use Effect

- A react hook for perfoming side effects based on changes to component state

## What is a side effect?

- Any actions or behaviour that is not directly related to rendering/ UI
  - Updating the title of the document
  - Setting intervals or timeouts
  - Subscribing to webhooks
  - Fetching/adding data with external APIs

## Component lifecycle

- This is a very common and pervasive mental model around React components

1. Load - we can do stuff literally while the code is loading
2. Mount - The first time the component renders (when the component attaches to the DOM)
3. Update - When a component re-renders either because of a change in state or a change in props
4. Unmount - When a component is removed from the DOM

### Note on React 18

There is an experimental feature turned on in React 18. It will cause components to mount, unmount and mount again **ONLY** in development mode

- It's based on a potential new functionality which will keep components in memory even if we don't see them on the screen
- It's not done yet
- Google for solutions
