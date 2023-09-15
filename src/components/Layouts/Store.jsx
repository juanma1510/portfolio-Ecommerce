import { useState } from 'react';
import React from 'react'
import ProductList from './layoutsStore/ProductList';


export const Store = () => {
    
  const [count, setCount] = useState(0);
    
  const Increment = () =>{
      setCount(count+1);
  }


  return (
      <>
      <header className="headerStore">
        <h1 className='storeTitle'>Martin's Store</h1>

        <h1 className='kart'>kart: {count}</h1>
    </header>
        <article className='cStore'>
        <ProductList Increment={Increment}/>
        

        </article>
    </>
        
  )
}

export default Store;
