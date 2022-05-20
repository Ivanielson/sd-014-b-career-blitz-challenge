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
    <form className="container mt-5 mb-5">
      <div className="input-group mb-3 col-md-6">
        <input
          className="form-control"
          placeholder="Nova Tarefa"
          id="task"
          type="text"
          value={ task }
          onChange={ ({ target: { value } }) => setTask(value) }
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          disabled={ valid } onClick={ handleClick }
        >
          <i class="bi bi-pencil-square"> Adicionar</i>
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
