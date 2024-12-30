import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
    <div className="book-create">
        <h3>Shopping list</h3>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add item" className="input" value={title} onChange={handleChange} />
            <button className="button">add</button>
        </form>
    </div>
    );
}

export default BookCreate