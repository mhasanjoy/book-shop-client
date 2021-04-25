import React, { useContext } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light container mb-5">
                <div className="container-fluid">
                    <h1 className="title">BOOK SHOP</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link">Checkout</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    !loggedInUser.email &&
                                    <div className="login">
                                        <Link to="/login" className="nav-link"><span style={{ color: 'white' }}>Login</span></Link>
                                    </div>
                                }
                                {
                                    loggedInUser.email &&
                                    <img className="user-image" src={loggedInUser.photoURL} alt="" />
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;