import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const PersonList = (props) => {
    const { products, setProducts } = props;

    

    return (
        <div>
            {
                products.map((product, index) => {
                    return <div key={index}>
                    <p><Link to={`/products/${product._id}`}>{product.title}'s Page! </Link></p>
                    </div>
                })
            }
        </div>
    )
}
export default PersonList;

