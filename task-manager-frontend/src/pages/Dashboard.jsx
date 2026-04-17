import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskService';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const showSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleError = (err) => {
    // Extracts your backend's specific ErrorDto response format if available
    const backendMessage = err.response?.data?.error;
    setError(backendMessage || 'An unexpected error occurred.');
    setTimeout(() => setError(null), 5000);
  };

  const handleFormSubmit = async (taskData, taskId) => {
    try {
      setError(null);
      if (taskId) {
        await updateTask(taskId, taskData);
        showSuccess('Task updated successfully!');
      } else {
        await createTask(taskData);
        showSuccess('Task created successfully!');
      }
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      handleError(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await deleteTask(id);
      showSuccess('Task deleted successfully!');
      fetchTasks();
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Task Manager</h1>
        <p style={{ color: 'var(--text-light)' }}>Organize your workflow cleanly and efficiently.</p>
      </header>

      {error && <div className="message error">{error}</div>}
      {success && <div className="message success">{success}</div>}

      <div className="dashboard">
        <aside>
          <TaskForm 
            onSubmit={handleFormSubmit} 
            initialData={editingTask} 
            clearSelection={() => setEditingTask(null)} 
          />
        </aside>
        
        <main>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>Loading tasks...</div>
          ) : (
            <TaskList 
              tasks={tasks} 
              onEdit={setEditingTask} 
              onDelete={handleDelete} 
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;