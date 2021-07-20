import React, { useState } from 'react';
import './Admin.css';
import { Link } from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
    const [task, setTask] = useState('addBook');
    const handleTask = taskInfo => {
        setTask(taskInfo);
    };

    return (
        <div className="Admin">
            <div className="row">
                <div className="col-md-3 admin-nav pt-3 text-center">
                    <h1 className="color-highlight">BOOK SHOP</h1>
                    <p className="mt-5"><Link to="/admin" onClick={() => handleTask('manageBooks')} style={{textDecoration: 'none'}}><span className="color-highlight">Manage Books</span></Link></p>
                    <p className="mt-4"><Link to="/admin" onClick={() => handleTask('addBook')} style={{textDecoration: 'none'}}><span className="color-highlight">Add Book</span></Link></p>
                </div>
                <div className="col-md-9 pt-3">
                    {
                        task === 'addBook' && <AddBook></AddBook>
                    }
                    {
                        task === 'manageBooks' && <ManageBooks></ManageBooks>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;