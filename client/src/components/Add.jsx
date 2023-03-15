import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';
const Add = (props) => {
    const {products, setProducts} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data.product]);
            })
            .catch(err => console.log(err))

            setTitle("");
            setPrice("");
            setDescription("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Form title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription}/>
        </form>
    )
}
export default Add;

