import React from 'react';
import TaskCard from './TaskCard';
import { rankPriority } from '../data/priorites';

const TaskList = ({ tasks, deleteTask }) => {
  const sortedTasks = tasks.sort(
    (a, b) => rankPriority(a.priority) - rankPriority(b.priority)
  );
  console.log(sortedTasks);
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
      {sortedTasks.map((task, index) => (
        <TaskCard
          key={index}
          data={task}
          deleteTask={deleteTask}
          taskIndex={index}
        />
      ))}
    </section>
  );
};

export default TaskList;
