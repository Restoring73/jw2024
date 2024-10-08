import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditCourseForm.css'

const EditCourseForm = ({ courses }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const course = courses[courseId];

  const [title, setTitle] = useState(course.title);
  const [meets, setMeets] = useState(course.meets);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="edit-course-form">
      <h2>Edit Course</h2>
      
      <div className="form-group">
        <label htmlFor="title">Course Title</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="meets">Meeting Times</label>
        <input 
          type="text" 
          id="meets" 
          value={meets} 
          onChange={(e) => setMeets(e.target.value)} 
        />
      </div>

      <button type="button" onClick={handleCancel} className="btn-cancel">Cancel</button>
    </form>
  );
};

export default EditCourseForm;
