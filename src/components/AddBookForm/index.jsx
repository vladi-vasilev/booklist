import './index.css';
import React, { useState } from 'react';

const Index = ({ addBook }) => {
    const emptyBookObj = { title: '', author: '', isRead: false };
    const [book, setBook] = useState(emptyBookObj);
    const [validation, setValidation] = useState('');

    const handleChange = (event) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (book.title.length > 1 && book.author.length > 1) {
            setValidation('');
            addBook(book);
            setBook(emptyBookObj);    
        } else {
            setValidation('Book title or book author must be longer');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="title">Title</label> */}
            <input id="title" name="title" type="text" placeholder="Book title" value={book.title} onChange={handleChange} />
            {/* <label htmlFor="author">Author</label> */}
            <input id="author" name="author" type="text" placeholder="Book author" value={book.author} onChange={handleChange} />
            <input type="submit" value="Add book" />
            {validation && <p className="validation">{validation}</p>}
        </form>
    );
}

export default Index;
