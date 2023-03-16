import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';
import {useNavigate} from 'react-router-dom'

const Add = (props) => {
    const navigate = useNavigate()
    const {products, setProducts} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const formValidator = () => {
        let isValid = true
        if(title.length<3) {
            return false
        }
        if(price.length<1) {
            return false
        }
        if(description.length<3) {
            return false
        }
        return isValid
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formValidator()){
            axios.post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
                .then(res => {
                    // console.log(res);
                    console.log(res.data);
                    setProducts([...products, res.data.product]);
                })
                .catch(err => {
                    console.log(err)
                    navigate("/home")
                })
    
                setTitle("");
                setPrice("");
                setDescription("");
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Form title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription}/>
        </form>
    )
}
export default Add;

