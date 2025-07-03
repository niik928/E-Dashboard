import React from 'react';

const AddProduct = () => {
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [inStock, setInStock] = React.useState('');
    const [error, setError] = React.useState('');

    const addProduct = async () => {

        console.warn(name);
        if (!id || !name || !price || !category ) {
            setError(true);
            return false;
        }
        console.warn(id, name, category, price, inStock);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/addProduct", {
            method: 'post',
            body: JSON.stringify({
                ProductID: Number(id),
                ProductName: name,
                Category: category,
                Price: Number(price),
                inStock: inStock,
                userId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);

    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="number" placeholder='Enter Product Id' className='inputBox'
                value={id} onChange={(e) => {
                    setId(e.target.value)
                }}></input>
           
            <input type="text" placeholder='Enter Product Name' className='inputBox'
                value={name} onChange={(e) => {
                    setName(e.target.value)
                }}></input>
                 {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product Category' className='inputBox'
                value={category} onChange={(e) => {
                    setCategory(e.target.value)
                }}></input>
                 {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="number" placeholder='Enter Product Price' className='inputBox'
                value={price} onChange={(e) => {
                    setPrice(e.target.value)
                }}></input>
                 {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <label>
                inStock: <input type="checkbox" className='inputBox' checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)} />
            </label>
            <button onClick={addProduct} className='appButton' >AddProduct</button>
        </div>)
}
export default AddProduct;