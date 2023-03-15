import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const DeleteBtn = (props) => {

    const {removeFromDom, product} = props
    const navigate = useNavigate();

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
        <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
    )
}

export default DeleteBtn