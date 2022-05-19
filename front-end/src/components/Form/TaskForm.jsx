import React, { useState } from 'react';
import { createTask } from '../../services/request';

function TaskForm() {
  const [task, setTask] = useState('');
  const valid = task.length < 12;

  async function handleClick() {
    const body = { task };
    const newTask = await createTask('/tasks', body);
    if ('message' in newTask) {
      setTask('');
    }
  }

  return (
    <form>
      <label htmlFor="task">
        <input
          id="task"
          type="text"
          value={ task }
          onChange={ ({ target: { value } }) => setTask(value) }
        />
      </label>
      <button type="button" disabled={ valid } onClick={ handleClick }>
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;
