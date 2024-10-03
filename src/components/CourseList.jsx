import './styles.css'

const CourseList = ({ courses, selectedTerm }) => {
    const filteredCourses = Object.keys(courses).filter(item => courses[item].term === selectedTerm)
    return (
        <div className='course-grid'>
            {filteredCourses.map((item) => {
                const course = courses[item];
                return (
                    <div className='course-content'>
                        <h2>{course.term} CS {course.number}</h2>
                        <p>
                            {course.title}
                        </p>
                        <p>
                            {course.meets}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default CourseList;