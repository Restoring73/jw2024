import './CoursePlan.css';

const CoursePlan = ({ selectedCourses, courses }) => (
  <div className="course-plan">
    {
      selectedCourses.length === 0 ? (
        <div>
          <h2>No courses selected</h2>
          <p>Select courses by clicking on them in the list.</p>
        </div>
      ) : (
        <div>
          <h2>Your Selected Courses</h2>
          {selectedCourses.map(courseId => {
            const course = courses[courseId];
            return (
              <div key={courseId} className="course-plan-item">
                <p><strong>CS {course.number}</strong> - {course.title}</p>
                <p>Meets: {course.meets}</p>
              </div>
            );
          })}
        </div>
      )
    }
  </div>
);

export default CoursePlan;
