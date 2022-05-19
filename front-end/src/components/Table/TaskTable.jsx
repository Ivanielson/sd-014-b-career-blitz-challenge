import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';

function TaskTable() {
  const { data, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <table>
        <thead>
          <th>Id</th>
          <th>Task</th>
          <th>Data</th>
          <th>Status</th>
        </thead>
        <tbody>
          {
            data.map(({ _id, task, createdAt, status }) => (
              <tr>
                <td key={ _id }>{ _id }</td>
                <td key={ _id }>{ task }</td>
                <td key={ _id }>{ createdAt }</td>
                <td key={ _id }>{ status }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

export default TaskTable;
