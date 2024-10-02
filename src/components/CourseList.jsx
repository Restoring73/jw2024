import './styles.css'

const CourseList = ({ courses }) => {
    return (
        <div className='course-grid'>
            {Object.keys(courses).map((item) => {
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