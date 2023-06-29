# Challenge: Tasks 
- delete, add and sort

```jsx
const taskData = [
    { task: 'Clean the bathroom', priority: 'low' },
    { task: 'Walk the dog', priority: 'high' },
    { task: 'Do codewars', priority: 'very high' },
    { task: 'Cook dinner', priority: 'medium' },
];
```

MVP:

- Make tasks deletable
- Create a component called Task Card that will contain the
    - task name,
    - priority, and
    - delete button
- Render a TaskCard for every task in the task data array
- When delete button is clicked that card should dissapear, and the data should be removed from the array
- State should be managed in a container component

BONUS:

- Create a form which will create new tasks, with an input for text and a select for priority
- Sort tasks in order of priority

EXTRA BONUS:

- Style cards based on priority
- Button to change sort from ascending to descending