import './App.css';
import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import uuid from 'uuid-random';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Don Quixote', author: 'Miguel de Cervantes', isRead: true },
    { id: 2, title: 'Harry Potter and the Goblet of Fire', author: 'JK Rowling', isRead: false }
  ]);

  const addBook = (bookDetails) => {
    let newBook = { id: uuid(), ...bookDetails };
    setBooks([newBook, ...books]);
    console.log(books);
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  const removeAll = () => {
    setBooks([]);
  }

  const toggleIsRead = (id) => {
    const booksArr = books.map(book => {
      if (book.id === id) return { ...book, isRead: !book.isRead }
      return book;
    });

    setBooks(booksArr);
  }

  return (
    <div className="app">
      <h1>Booklist</h1>

      <BookList books={books} toggleIsRead={toggleIsRead} removeBook={removeBook} />
      {books.length !== 0 ? <button className="remove-all" type="button" onClick={removeAll}>Remove All</button> : ''}

      <h2>Add a book to your Booklist</h2>
      <AddBookForm addBook={addBook} />
    </div>
  );
}

export default App;
