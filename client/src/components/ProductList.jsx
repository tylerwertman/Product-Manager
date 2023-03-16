import React from 'react'
import {Link} from 'react-router-dom';
import DeleteBtn from './DeleteBtn';

const ProductList = (props) => {
    
    const { products, setProducts } = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            {
                products.map((product, index) => {
                    return <div key={index}>
                    <Link to={`/products/${product._id}`}>{product.title}'s Page! </Link>&nbsp;
                    <Link to={`/products/edit/${product._id}`}>Edit</Link>&nbsp;
                    <DeleteBtn product={product} removeFromDom={removeFromDom}/>
                    </div>
                })
            }
        </div>
    )
}
export default ProductList;

