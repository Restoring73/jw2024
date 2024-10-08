import './styles.css';

const Course = ({ courseId, course, selectedCourses, toggleCourseSelection, hasConflict}) => {
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
        {!isSelectable && <span className="unselectable-icon">X</span>}
      </div>
    );
};

export default Course;
