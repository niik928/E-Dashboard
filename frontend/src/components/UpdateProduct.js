import React, { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
const UpdateProduct = () => {
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [inStock, setInStock] = React.useState('');
    const params= useParams();
    const navigate = useNavigate();


    useEffect(()=>{
       
        getProductDetails();
    })

    const getProductDetails = async()=>{
         console.warn(params);
         let result = await fetch(`http://localhost:5000/products/${params.id}`);
         result = await result.json();
         setId(result.id);
         setName(result.name);
         setCategory(result.category);
         setPrice(result.price);
         setInStock(result.inStock);
    }
    const updateProduct = async () => {

        console.warn(id, name, category, price, inStock);
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
         method:'put',
         body:JSON.stringify({id, name, category, price, inStock}),
        headers: {
            "Content-Type":"application/json"
         }
        });
        result= await result.json();
        console.warn(result);
        navigate("/");
    }
    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="number" placeholder='Enter Product Id' className='inputBox'
                value={id} onChange={(e) => {
                    setId(e.target.value)
                }}></input>

            <input type="text" placeholder='Enter Product Name' className='inputBox'
                value={name} onChange={(e) => {
                    setName(e.target.value)
                }}></input>

            <input type="text" placeholder='Enter Product Category' className='inputBox'
                value={category} onChange={(e) => {
                    setCategory(e.target.value)
                }}></input>

            <input type="number" placeholder='Enter Product Price' className='inputBox'
                value={price} onChange={(e) => {
                    setPrice(e.target.value)
                }}></input>

            <label>inStock: <input type="checkbox" className='inputBox' checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)} />
            </label>
            <button onClick={updateProduct} className='appButton' >UpdateProduct</button>
        </div>)
}
export default UpdateProduct;