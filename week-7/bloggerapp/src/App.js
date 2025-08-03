import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("books");

  const renderView = () => {
    // switch case rendering
    switch (view) {
      case "books":
        return <BookDetails />;
      case "blogs":
        return <BlogDetails />;
      case "courses":
        return <CourseDetails />;
      default:
        return <p>Please select a view</p>;
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>📘 Blogger App</h1>

      <button onClick={() => setView("books")}>Book Details</button>
      <button onClick={() => setView("blogs")}>Blog Details</button>
      <button onClick={() => setView("courses")}>Course Details</button>

      <hr />
      {/* Rendering with function */}
      {renderView()}
    </div>
  );
}

export default App;
