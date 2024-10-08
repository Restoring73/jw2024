import './styles.css'
import Course from './Course'
import { TimeConflictChecker } from '../utilities/TimeCheck';

const CourseList = ({ courses, selectedTerm, selectedCourses, toggleCourseSelection }) => {
    const filteredCourses = Object.keys(courses).filter(item => courses[item].term === selectedTerm)
    return (
        <div className='course-grid'>
            {filteredCourses.map((item) => {
                const course = courses[item];

                const hasConflict = TimeConflictChecker(course, selectedCourses, courses);

                return (
                    <Course 
                        key={item}
                        courseId={item}
                        course={course}
                        selectedCourses={selectedCourses}
                        toggleCourseSelection={toggleCourseSelection}
                        hasConflict={hasConflict}
                    />
                );
            })}
        </div>
    );
};

export default CourseList;