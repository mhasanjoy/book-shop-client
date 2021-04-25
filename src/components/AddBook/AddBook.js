import axios from 'axios';
import React, { useState } from 'react';
import './AddBook.css';

const AddBook = () => {
    const [imageURL, setImageURL] = useState(null);
    const [inputData, setInputData] = useState({
        title: '',
        author: '',
        price: null
    });

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b4895f5bcf21866592dcfa50f2510910');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log('Image successfully uploaded to ImageBB: ', response.data.success);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    const handleOnBlur = event => {
        const input = {...inputData};
        if(event.target.name === 'title'){
            input.title = event.target.value;
        }
        if(event.target.name === 'author'){
            input.author = event.target.value;
        }
        if(event.target.name === 'price'){
            input.price = event.target.value;
        }
        setInputData(input);
    };

    const handleSubmit = event => {
        const eventData = {...inputData, imageURL};
        fetch('https://shrouded-caverns-55821.herokuapp.com/addBook', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(eventData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Book successfully inserted to database: ", data);
            });
    };

    return (
        <div>
            <div className="add-book">
                <h2 className="mb-5">Add Book</h2>
                <form onSubmit={handleSubmit}>
                    <label className="label-highlight" htmlFor="">Book Name</label><br />
                    <input onBlur={handleOnBlur} className="input-highlight" placeholder="Enter Name" type="text" name="title" /><br />
                    <label className="mt-3 label-highlight" htmlFor="">Author Name</label><br />
                    <input onBlur={handleOnBlur} className="input-highlight" placeholder="Enter Name" type="text" name="author" /><br />
                    <label className="mt-3 label-highlight" htmlFor="price">Add Price</label><br />
                    <input onBlur={handleOnBlur} className="input-highlight" placeholder="Enter Price" type="number" id="price" name="price" /><br />
                    <label className="mt-3 label-highlight" htmlFor="coverPhoto">Add Book Cover Photo</label><br />
                    <input onChange={handleImageUpload} type="file" id="coverPhoto" /><br />
                    <input className="mt-3 save-btn" type="submit" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddBook;