import React, { useState, useContext } from 'react';
import { createTask } from '../../services/request';
import TaskContext from '../../context/TaskContext';

function TaskForm() {
  const [task, setTask] = useState('');
  const { setLoading } = useContext(TaskContext);
  const valid = task.length < 12;
  const MILLISECONDS = 1000;

  async function handleClick() {
    const body = { task };
    const newTask = await createTask('/tasks', body);
    if ('message' in newTask) {
      setLoading(true);
      setTask('');
    }
    setTimeout(() => {
      setLoading(false);
    }, MILLISECONDS);
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
