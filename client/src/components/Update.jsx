import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Form from './Form';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                // console.log(id)
                console.log(res)
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    // console.log(title)
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <Form title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription}/>
            </form>
        </div>
    )
}
export default Update;

