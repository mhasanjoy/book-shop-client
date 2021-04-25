import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Checkout = () => {
    const [loggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch('https://shrouded-caverns-55821.herokuapp.com/book/' + id)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    const handleCheckout = () => {
        const order = { ...book, ...loggedInUser, quantity: 1, total: book.price };

        fetch('https://shrouded-caverns-55821.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("Book Ordered");
                }
                else {
                    alert("Something went wrong. Please try again.");
                }
            });
    };

    return (
        <div>
            <Header></Header>

            <div className="container mt-5 pt-5">
                <h1 className="container">Checkout</h1>
                <div className="container mt-3">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {
                            book.title &&
                            <tbody>
                                <tr>
                                    <td>{book.title}</td>
                                    <td>1</td>
                                    <td>${book.price}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td>${book.price}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td><button onClick={handleCheckout} className="checkout-btn">Checkout</button></td>
                                </tr>
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;