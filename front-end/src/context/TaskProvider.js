import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { getAllTasks } from '../services/request';

function TaskProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTasks() {
    const tasks = await getAllTasks('/tasks');
    setData(tasks);
  }

  useEffect(() => {
    getTasks();
  }, []);

  const context = {
    data,
    loading,
    setLoading,
    getTasks,
  };

  return (
    <TaskContext.Provider value={ context }>
      { children }
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TaskProvider;
