import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialData, clearSelection }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'MEDIUM',
    status: 'OPEN'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        dueDate: initialData.dueDate || '',
        priority: initialData.priority || 'MEDIUM',
        status: initialData.status || 'OPEN'
      });
    } else {
      setFormData({ title: '', description: '', dueDate: '', priority: 'MEDIUM', status: 'OPEN' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format payload to strictly match DTOs
    const payload = { ...formData };
    // Backend allows null for optional fields, so convert empty strings to null
    if (!payload.description) payload.description = null;
    if (!payload.dueDate) payload.dueDate = null;

    // Remove status if creating new task (CreateTaskRequestDto doesn't accept it)
    if (!initialData) {
      delete payload.status;
    }

    onSubmit(payload, initialData?.id);
  };

  return (
    <div className="card gradient-card">
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
        {initialData ? 'Update Task' : 'Create New Task'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title *</label>
          <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required maxLength="255" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} rows="3" maxLength="1000" />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input type="date" name="dueDate" className="form-control" value={formData.dueDate} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Priority *</label>
          <select name="priority" className="form-control" value={formData.priority} onChange={handleChange}>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>

        {initialData && (
          <div className="form-group">
            <label>Status *</label>
            <select name="status" className="form-control" value={formData.status} onChange={handleChange}>
              <option value="OPEN">Open</option>
              <option value="COMPLETE">Complete</option>
            </select>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button type="submit" className="btn btn-primary">
            {initialData ? 'Update' : 'Create'} Task
          </button>
          {initialData && (
            <button type="button" className="btn" style={{ background: 'white', border: '1px solid var(--border-color)' }} onClick={clearSelection}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;