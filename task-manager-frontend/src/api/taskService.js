import axios from 'axios';

// Backend runs on port 8082 as per application.properties
const API_URL = 'http://localhost:8082/api/v1/tasks';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (taskData) => {
  // Matches CreateTaskRequestDto (no status field)
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  // Matches UpdateTaskRequestDto (requires status field)
  const response = await axios.put(`${API_URL}/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/${taskId}`);
  return response.data;
};