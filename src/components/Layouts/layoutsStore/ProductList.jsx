import React, { useEffect } from 'react'
import { useState } from 'react';



export const ProductList = ({Increment}) => {

    

    const [products, setProducts] = useState([]);


    const ProductList = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json();
        setProducts(products);
    };

    useEffect(() => {
        ProductList();

    })



    return (

        <div className="container-products">
            {products.map(product => (
                <article className="card-product">
                    <figure className="container-img">
                        <img className='product.img' src={product.image} alt={product.title} width={180} height={220} />
                    </figure>
                    <section className="info-product">
                        <h3 className='product-desc'>{product.title}</h3>
                        <p className="price">$ {product.price}</p>
                        <button className="add" onClick={Increment}>Add to kart</button>
                    </section>
                </article>

            ))}
        </div>

    );
};





export default ProductList;
