const CourseList = ({ courses }) => {
    return (
        <div>
            {Object.keys(courses).map((item) => {
                const course = courses[item];
                return (
                    <p>
                        {course.term} CS {course.number}: {course.title}
                    </p>
                );
            })}
        </div>
    );
};

export default CourseList;