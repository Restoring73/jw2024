import React, { useState } from 'react';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Chooser from './components/choosing';
import CoursePlan from './components/CoursePlan';
import Modal from './components/Modal';
import { useJsonQuery } from './utilities/Courses';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [opened, setOpen] = useState(false);

  const toggleCourseSelection = (courseId) => setSelectedCourses(
    selectedCourses.includes(courseId)
      ? selectedCourses.filter(id => id !== courseId)
      : [...selectedCourses, courseId]
  );

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data || !data.title || !data.courses) return <h1>No course data found</h1>;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Banner title={data.title} />
        
        <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />

        <button className="btn-course-plan" onClick={openModal}>Course Plan</button>

        <CourseList 
          courses={data.courses}
          selectedTerm={selectedTerm}
          selectedCourses={selectedCourses}
          toggleCourseSelection={toggleCourseSelection}
        />

        <Modal open={opened} close={closeModal}>
          <CoursePlan selectedCourses={selectedCourses} courses={data.courses} />
        </Modal>
      </div>
    </QueryClientProvider>
  );
};

export default App;
