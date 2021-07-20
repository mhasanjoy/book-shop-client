import React, { useEffect, useState } from "react";
import "./ManageBooks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-caverns-55821.herokuapp.com/allBooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch("https://shrouded-caverns-55821.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Deleted successfully");
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
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="btn btn-danger"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
