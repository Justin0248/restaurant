import react, { useEffect, useState } from 'react';

export default function Cart( {prop, count} ) {

 const itemCount = prop.map((item) =>
     <li>{count}: {item.name}</li>)
     const subTotal = prop.reduce((accumulator, current) => { 
        return accumulator + current.price; 
    }, 0)
return (
    <div>
        {itemCount}
            <div> 
            {subTotal > 0 && 
                <span> subtotal: {parseFloat(subTotal).toFixed(2)}</span>
            }
            </div>
    </div>
);}
