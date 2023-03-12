import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) => {
    
    const { products, setProducts } = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                // console.log(id)
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                products.map((product, index) => {
                    return <div key={index}>
                    <Link to={`/products/${product._id}`}>{product.title}'s Page! </Link>&nbsp;
                    <Link to={`/products/edit/${product._id}`}
                    // data={{removeFromDom: this.removeFromDom, deleteProduct: this.deleteProduct}}
                    >Edit</Link>&nbsp;
                    <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}
export default PersonList;

