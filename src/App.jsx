import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Chooser from './components/choosing';
import EditCourseForm from './components/EditCourseForm';
import { useJsonQuery } from './utilities/Courses';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourseSelection = (courseId) => setSelectedCourses(
    selectedCourses.includes(courseId)
      ? selectedCourses.filter(id => id !== courseId)
      : [...selectedCourses, courseId]
  );

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data || !data.title || !data.courses) return <h1>No course data found</h1>;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Banner title={data.title} />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
                  <CourseList 
                    courses={data.courses} 
                    selectedTerm={selectedTerm} 
                    selectedCourses={selectedCourses} 
                    toggleCourseSelection={toggleCourseSelection} 
                  />
                </>
              }
            />
            <Route 
              path="/edit/:courseId" 
              element={<EditCourseForm courses={data.courses} />} 
            />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
