import React from 'react';

const TaskCard = ({ data, deleteTask, taskIndex }) => {
  const { task, priority } = data;
  const onDeleteButtonClick = (e) => {
    deleteTask(taskIndex);
  };
  return (
    <div style={{ border: '1px solid white', padding: '0.25em' }}>
      <h2>{task}</h2>
      <h3>Priority: {priority}</h3>
      <button
        onClick={onDeleteButtonClick}
        style={{ color: 'white', backgroundColor: 'red' }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
