import React from 'react';

const books = [
  { id: 1, title: "Learn React", author: "Dan Abramov", pages: 150 },
  { id: 2, title: "JS Essentials", author: "Kyle Simpson", pages: 300 },
  { id: 3, title: "CSS Secrets", author: "Lea Verou", pages: 180 }
];

const BookItem = ({ book }) => (
  <li>
    <strong>{book.title}</strong> by {book.author} - 
    <span style={{ color: book.pages > 200 ? 'green' : 'blue' }}>
      {book.pages} pages
    </span>
  </li>
);

const BookDetails = () => {
  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
