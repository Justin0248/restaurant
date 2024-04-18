import react, { useEffect, useState } from 'react';

export default function Cart( {prop} ) {
 const items = [...new Set(prop.map(item =>
     <li>{item.count}: {item.name}</li>))]
     const sum = prop.reduce((accumulator, current) => { 
        return accumulator + current.price; 
    }, 0)
return (
    <div>
        {items}
            <div> 
            {sum > 0 && 
                <span> subtotal: {sum}</span>
            }
            </div>
    </div>
);}
