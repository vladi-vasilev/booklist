import './index.css';
import React from 'react';
import Book from '../Book';

const index = ({ books, toggleIsRead, removeBook }) => {
    if (books.length === 0) {
        return (
            <div className="empty-list">Your list is empty, add a book.</div>
        );
    }

    const bookList = books.map(book =>
        <Book key={book.id} book={book} toggleIsRead={toggleIsRead} removeBook={removeBook} />
    );

    return (
        <ul className="book-list">
            {bookList}
        </ul>
    );
}

export default index;
