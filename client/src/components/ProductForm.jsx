import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
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
            <p>
                <label>Title</label><br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;

