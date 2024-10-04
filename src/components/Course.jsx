import './styles.css'

const Course = ({ courseId, course, selectedCourses, toggleCourseSelection }) => {
    const isSelected = selectedCourses.includes(courseId);
  
    return (
      <div 
        className={`course-content ${isSelected ? 'selected' : ''}`}
        onClick={() => toggleCourseSelection(courseId)}
      >
        <h2>{course.term} CS {course.number}</h2>
        <p>{course.title}</p>
        <p>{course.meets}</p>
        {isSelected && <span className="selected-icon">✔</span>}
      </div>
    );
};
  
export default Course;
  