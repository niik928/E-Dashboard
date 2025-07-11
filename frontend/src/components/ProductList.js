import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProucts();
    }, [])

    const getProucts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        
        setProducts(result);
    }
    

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/products/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getProucts();
        }
    };

    const searchHandle = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        }else{
            getProucts();
        }


    }
    return (
        <div className='product-list'>
            <h3>Product List</h3>
            <input className='search-product-box' type='text' placeholder='SearchProduct'
                onChange={searchHandle} />
            <ul>
                <li>Sr.No</li>
                <li>Id</li>
                <li>Name</li>
                <li>Category</li>
                <li>Price</li>
                <li>Operation</li>
            </ul>
            {
             products.length>0? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.category}</li>
                        <li>{item.price}</li>
                        <li><button onClick={() => { deleteProduct(item._id) }}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                    </ul>)
                    :<h1>No Result Found</h1>
            }

        </div>
    )
}
export default ProductList;