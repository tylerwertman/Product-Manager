import React, { useEffect } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import DeleteBtn from './DeleteBtn';

const Detail = (props) => {
    const {removeFromDom, product, setProduct} = props
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
            <DeleteBtn removeFromDom={removeFromDom} product={product}/>
        </div>
    );
}
export default Detail;