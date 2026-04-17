import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks || tasks.length === 0) {
    return <div className="card" style={{ textAlign: 'center', color: 'var(--text-light)' }}>No tasks found. Create one!</div>;
  }

  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-header">
            <h3 className="task-title">{task.title}</h3>
            <span className={`badge ${task.status}`}>{task.status}</span>
          </div>
          <p className="task-desc">{task.description || 'No description provided.'}</p>
          <div className="task-meta">
            <p><strong>Priority:</strong> <span className={`badge ${task.priority}`}>{task.priority}</span></p>
            {task.dueDate && <p><strong>Due:</strong> {task.dueDate}</p>}
          </div>
          <div className="task-actions">
            <button className="btn-edit" onClick={() => onEdit(task)}>Edit</button>
            <button className="btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;