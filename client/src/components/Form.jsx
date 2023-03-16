import React from 'react'

const Form = (props) => {

const {title, setTitle, price, setPrice, description, setDescription} = props

    return (
        <div>
            <div>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                        {
                        title && title.length < 3 ?
                        <p className='text-danger'>Title must be at least 3 characters in length</p> : ""
                        }
                </div>
                <div>
                    <label>Price</label><br />
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                        {
                        price && price.length < 0 ?
                        <p className='text-danger'>Price must not be empty</p> : ""
                        }
                </div>
                <div>
                    <label>Description</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                        {
                        description && description.length < 3 ?
                        <p className='text-danger'>Description must be at least 3 characters in length</p> : ""
                        }
                </div>
                <br/>
                <input type="submit" value="Submit"/>
        </div>
    )
}
export default Form