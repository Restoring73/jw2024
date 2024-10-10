import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData';
import { validateCourseForm } from '../utilities/validators';

const EditCourseForm = ({ courses }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const course = courses[courseId];

  const [formData, handleInputChange] = useFormData(validateCourseForm, { title: course.title, meets: course.meets });

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
          value={formData.values.title} 
          onChange={handleInputChange}
          required
        />
        {formData.errors?.title && <p className="error-message">{formData.errors.title}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="meets">Meeting Times</label>
        <input 
          type="text" 
          id="meets" 
          value={formData.values.meets} 
          onChange={handleInputChange} 
        />
        {formData.errors?.meets && <p className="error-message">{formData.errors.meets}</p>}
      </div>

      <button type="button" onClick={handleCancel} className="btn-cancel">Cancel</button>
    </form>
  );
};

export default EditCourseForm;
