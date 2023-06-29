import { useState } from 'react';
import priorites from '../data/priorites';

const AddTask = ({ createTask }) => {
  const defaultValues = { task: '', priority: 'low' };
  const [formValues, setFormValues] = useState({ task: '', priority: 'low' });

  const onSubmit = (e) => {
    e.preventDefault();
    createTask(formValues);
    setFormValues(defaultValues);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formValues, [name]: value };
    setFormValues(newState);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: '0.25em' }}>
      <div style={{ display: 'flex', gap: '0.25em' }}>
        <label htmlFor='taskInput'>Task</label>
        <input
          id='taskInput'
          type='text'
          placeholder='Type your task here'
          name='task'
          value={formValues.task}
          onChange={onChange}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.25em' }}>
        <label id='priorityInput'>Priority</label>
        <select
          id='priorityInput'
          name='priority'
          value={formValues.priority}
          onChange={onChange}
        >
          {priorites.map((p, i) => (
            <option key={i}>{p}</option>
          ))}
        </select>
      </div>
      <button>Create Task</button>
    </form>
  );
};

export default AddTask;
