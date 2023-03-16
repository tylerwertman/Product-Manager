import React, { useEffect } from 'react'
import axios from 'axios';
import ProductList from '../ProductList';
import Add from '../Add';
// import { useNavigate } from 'react-router-dom';
const Main = (props) => {
    // const navigate = useNavigate()

    const { products, setProducts } = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.products);
                // setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
                // navigate("/home")
                // setProducts(...products)

            })
    }, [])

    return (
        <div>
            <Add products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
