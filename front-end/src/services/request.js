import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getAllTasks = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const createTask = async (endpoint, body) => {
  try {
    await api.post(endpoint, body);
    return { message: 'Task successfully registered!' }
  } catch (error) {
    return { error: error.message };
  }
};

export const updateTask = async (endpoint, body) => {
  try {
    await api.put(endpoint, body);
    return { message: 'Task successfully updated!' }
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteTask = async (endpoint) => {
  try {
    await api.delete(endpoint);
    return { message: 'Task successfully removed!' }
  } catch (error) {
    return { error: error.message };
  }
};
