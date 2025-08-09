import React from 'react';

const courses = [
  { id: 101, name: "React Basics", duration: "4 weeks" },
  { id: 102, name: "Node.js Essentials", duration: "3 weeks" },
  { id: 103, name: "Full Stack Dev", duration: "8 weeks" }
];

const CourseDetails = () => {
  let content;

  if (courses.length > 0) {
    content = (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No courses found.</p>;
  }

  return (
    <div>
      <h2>🎓 Course Details</h2>
      {content}
    </div>
  );
};

export default CourseDetails;
