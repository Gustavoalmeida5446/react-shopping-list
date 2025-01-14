import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return (
        <div className="book-show">

            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>delete</button>
                <button className="delete" onClick={handleDeleteClick}>delete</button>
            </div>
        </div>
    );
}

export default BookShow;