import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';
import { deleteTask } from '../../services/request';
import moment from 'moment';

function TaskTable() {
  const { data, getTasks, setLoading } = useContext(TaskContext);
  const MILLISECONDS = 1000;

  async function handleClickRemove(id) {
    await deleteTask(`/tasks/${id}`);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, MILLISECONDS);
  }

  useEffect(() => {
    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container mt-5'>
      <section className='row'>
        <table className='table table-striped'>
          <thead>
            <th>Id</th>
            <th>Task</th>
            <th>Date</th>
            <th>Status</th>
            <th>Remove</th>
          </thead>
          <tbody>
            {
              data.map(({ _id, task, createdAt, status }) => (
                <tr>
                  <td key={ _id }>{ _id }</td>
                  <td key={ _id }>{ task }</td>
                  <td key={ _id }>{ moment(createdAt).format('DD/MM/YYYY') }</td>
                  <td key={ _id }>{ status }</td>
                  <td key={ _id }>
                    <button
                      className='btn btn-danger m-1'
                      type="button"
                      onClick={ () => handleClickRemove(_id) }
                    >
                      <i className="bi bi-trash"> </i>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TaskTable;
