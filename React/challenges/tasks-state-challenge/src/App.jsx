import { useState } from 'react';
import taskData from './data/taskData';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(taskData);

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => index !== i);
    setTasks(filteredTasks);
  };

  const createTask = (taskObject) => {
    setTasks([...tasks, taskObject]);
  };

  return (
    <>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <AddTask createTask={createTask} />
    </>
  );
}

export default App;

// Challenge:

// MVP:
// Make tasks deletable
// Create a component called Task Card that will contain the task name, priority, and delete button
// Render a TaskCard for every task in the task data array
// When delete button is clicked that card should dissapear, and the data should be removed from the array
// State should be managed in a container component
// BONUS:
// Create a form which will create new tasks, with an input for text and a select for priority
// Sort tasks in order of priority
// EXTRA BONUS:
// Style cards based on priority
// Button to change sort from ascending to descending
