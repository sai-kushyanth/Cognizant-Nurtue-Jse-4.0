import React from 'react';
import './App.css';
import CohortDetails from './Components/CohortDetails';

const cohortData = [
  {
    name: 'React Bootcamp',
    startDate: '2024-12-01',
    endDate: '2025-01-30',
    status: 'Ongoing',
  },
  {
    name: 'Java Basics',
    startDate: '2024-09-01',
    endDate: '2024-11-30',
    status: 'Completed',
  },
];

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      {cohortData.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
