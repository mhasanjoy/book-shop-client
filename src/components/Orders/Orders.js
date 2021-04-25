import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState(['']);

    useEffect(() => {
        fetch('https://shrouded-caverns-55821.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then((response) => response.json())
            .then(data => {
                setOrders(data);
            });
    }, [loggedInUser.email]);

    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        const price = parseInt(orders[i].price);
        const quantity = parseInt(orders[i].quantity);
        total = total + price * quantity;
    }

    return (
        <div className="container mt-5">
            <h1 className="title">BOOK SHOP</h1>
            <h2 className="mt-5">Orders</h2>
            {
                orders[0].name && orders[0].email &&
                <div>
                    <p>Name: {orders[0].name}</p>
                    <p>Email: {orders[0].email}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order =>
                                <tbody key={order._id}>
                                    <tr>
                                        <td>{order.title}</td>
                                        <td>1</td>
                                        <td>${order.price}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                        {
                            orders[0].email &&
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td>${total}</td>
                                </tr>
                            </tfoot>
                        }
                    </table>
                </div>
            }
        </div>
    );
};

export default Orders;