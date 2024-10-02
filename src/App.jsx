import React from 'react';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import {useJsonQuery} from './utilities/Courses';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data || !data.title || !data.courses) return <h1>No course data found</h1>;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Banner title={data.title} />
        <CourseList courses={data.courses} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
