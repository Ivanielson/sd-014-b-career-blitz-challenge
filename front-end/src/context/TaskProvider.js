import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';

function TaskProvider({ children }) {
  const [data, setData] = useState([]);

  function getTasks() {
    const tasks = [
      {
        _id: "62864e04ded155a010c1b0a3",
        task: "Assistir Aula Ao vivo",
        status: "Pendente",
        createdAt: "2022-05-19T14:01:40.434Z"
      },
    ];
    setData(tasks);
  }

  const context = {
    data,
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
