import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductList from '../ProductList';
import ProductForm from '../ProductForm';
const Main = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;
