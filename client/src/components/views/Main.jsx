import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductList from '../ProductList';
import ProductForm from '../ProductForm';
const Main = (props) => {

    const { products, setProducts } = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                // console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])//products inside //spam refresh console but clears list on return to home

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
