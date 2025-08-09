import React from 'react';

const blogs = [
  { id: 1, title: "Intro to React", published: true },
  { id: 2, title: "Advanced React", published: false },
  { id: 3, title: "React with Redux", published: true }
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - 
            {blog.published ? (
              <span style={{ color: "green" }}> Published</span>
            ) : (
              <span style={{ color: "red" }}> Draft</span>
            )}
          </li>
        ))}
      </ul>

      {/* Logical && rendering */}
      {blogs.length === 0 && <p>No blogs available</p>}
    </div>
  );
};

export default BlogDetails;
