import React, { useEffect, useState } from 'react';
import './ManageBooks.css';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBooks')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
            });
    }, []);

    const handleDelete = id => {
        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                alert('Deleted successfully');
            });
    };

    return (
        <div className="manage-books">
            <h2 className="mb-5">Manage Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    books.map(book =>
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td><button onClick={() => handleDelete(book._id)} className="btn btn-danger">Delete</button></td>
                        </tr>)
                }
            </table>
        </div>
    );
};

export default ManageBooks;