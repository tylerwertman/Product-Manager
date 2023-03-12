import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: ${product.price}</p>
            <p>Product Description: {product.description}</p>
            <Link to="/home">Return to Form</Link>
        </div>
    );
}
export default Detail;

