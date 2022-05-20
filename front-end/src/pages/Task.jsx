import React, { useContext } from 'react';
import TaskForm from '../components/Form/TaskForm';
import Loading from '../components/Loading/Loading';
import TaskTable from '../components/Table/TaskTable';
import TaskContext from '../context/TaskContext';

function Task() {
  const { loading } = useContext(TaskContext);

  return (
    <section>
      <div className="container mt-4">
        <h2>Adiciona Uma Nova Tarefa</h2>
        <TaskForm />
      </div>
      <div className="container mt-4">
        <h2>Lista de Tarefa</h2>
        { loading ? <Loading /> : <TaskTable /> }
      </div>
    </section>
  );
}

export default Task;
