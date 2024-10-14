import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Chooser from './components/choosing';
import EditCourseForm from './components/EditCourseForm';
import { useDbData } from './utilities/firebaseHooks';
import './App.css';

const App = () => {
  const [courses, error] = useDbData('/courses');
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourseSelection = (courseId) => {
    setSelectedCourses(
      selectedCourses.includes(courseId)
        ? selectedCourses.filter(id => id !== courseId)
        : [...selectedCourses, courseId]
    );
  };

  if (error) return <h1>Error loading courses: {error.toString()}</h1>;
  if (!courses) return <h1>Loading courses...</h1>;

  return (
    <div className="App">
      <Banner title="Course Planner" />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
                <CourseList 
                  courses={courses}
                  selectedTerm={selectedTerm}
                  selectedCourses={selectedCourses}
                  toggleCourseSelection={toggleCourseSelection}
                />
              </>
            }
          />
          <Route path="/edit/:courseId" element={<EditCourseForm courses={courses} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
