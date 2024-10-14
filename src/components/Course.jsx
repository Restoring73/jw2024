import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../utilities/firebaseAuth';

const Course = ({ courseId, course, selectedCourses, toggleCourseSelection, hasConflict }) => {
  const [user] = useAuthState();

  const isSelected = selectedCourses.includes(courseId);
  const isSelectable = isSelected || !hasConflict;

  return (
    <div
      className={`course-content ${isSelected ? 'selected' : ''} ${!isSelectable ? 'unselectable' : ''}`}
      onClick={() => isSelectable && toggleCourseSelection(courseId)}
    >
      <h2>{course.term} CS {course.number}</h2>
      <p>{course.title}</p>
      <p>{course.meets}</p>
      {isSelected && <span className="selected-icon">✔</span>}
      {!isSelected && hasConflict && <span className="unselectable-icon">X</span>}

      {user && <Link to={`/edit/${courseId}`} className="edit-course-btn">Edit</Link>}
    </div>
  );
};

export default Course;

