import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData';
import { useDbUpdate } from '../utilities/firebaseHooks';
import { validateCourseForm } from '../utilities/validators';

const EditCourseForm = ({ courses }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const course = courses[courseId];

  const [formData, handleInputChange] = useFormData(validateCourseForm, { title: course.title, meets: course.meets });

  const [updateCourse, result] = useDbUpdate(`/courses/${courseId}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCourse({ title: formData.values.title, meets: formData.values.meets });
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

      <button type="submit" className="btn-save">Save</button>
      <button type="button" onClick={() => navigate('/')} className="btn-cancel">Cancel</button>

      {result && result.error && <p className="error-message">Error: {result.error.message}</p>}
    </form>
  );
};

export default EditCourseForm;
