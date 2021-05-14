import './index.css';
import React from 'react';

const index = ({ book, toggleIsRead, removeBook }) => {
    return (
        <li className={book.isRead ? "read" : "not-read"}>
            <div onClick={() => toggleIsRead(book.id)}>
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
            </div>
            <button className="delete" type="button" onClick={() => removeBook(book.id)}>X</button>
        </li>
    );
}

export default index;
