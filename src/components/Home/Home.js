import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-caverns-55821.herokuapp.com/allBooks')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
            });
    }, []);

    return (
        <div>
            <Header></Header>

            <div className="container mt-5 pt-5">
                <div className='row g-5 mb-5'>
                    {
                        books.map(book => <Card key={book._id} book={book}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;