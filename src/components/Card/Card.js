import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const { _id, title, author, price, imageURL } = props.book;

    return (
        <>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <div className="px-4 py-4 bg-secondary">
                        <img src={imageURL} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{author}</p>
                     </div>
                    <div className="card-footer d-flex">
                        <h2 style={{color: 'rebeccapurple'}}>${price}</h2>
                        <Link to={`/checkout/${_id}`}><button className="buy-btn">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;