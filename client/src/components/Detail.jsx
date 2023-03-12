import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const Detail = (props) => {
    const navigate = useNavigate();
    const {removeFromDom} = props
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
    
    
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                // console.log(id)
                removeFromDom(id)
                navigate("/home")
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <p>Product Title: {product.title}</p>
            <p>Product Price: ${product.price}</p>
            <p>Product Description: {product.description}</p>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete & return to form</button>

            <button><Link to="/home">Return to Form</Link></button>
        </div>
    );
}
export default Detail;