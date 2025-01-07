import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create" style={{ zIndex: 9999 }}>
            <h3>Shopping list</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add item" className="input" value={title} onChange={handleChange} />
                <button className="button">add</button>
            </form>
        </div>
    );
}

export default BookCreate