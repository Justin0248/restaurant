import react, { useEffect, useState } from 'react';

export default function Cart( {prop, count} ) {

 const itemCount = prop.map((item) =>
    count > 0 && <li>{item.count}: {item.name}</li>)
     const subTotal = prop.reduce((accumulator, current) => { 
        return accumulator + current.price * current.count; 
    }, 0)
return (
    <>
        {itemCount}
            <div> 
            {subTotal > 0 && 
                <span> subtotal: {parseFloat(subTotal).toFixed(2)}</span>
            }
            </div>
    </>
);}
