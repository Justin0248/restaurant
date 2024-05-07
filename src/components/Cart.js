import  { React, useState } from 'react';
import './Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export default function Cart( {prop} ) {
const [display, setDisplay] = useState(true);
const handleEvent = () => {
    display ? setDisplay(false) : setDisplay(true);
}
 const itemCount = prop.map((item) =>
    <div className='cart_item_border'>
   <li className='cart_item'>{item.count}: {item.name}
    </li> </div>)
     const subTotal = prop.reduce((accumulator, current) => { 
        return accumulator + current.price * current.count; 
    }, 0)
return (
    <div className='cart'>
        {itemCount.length > 0 && (
        <div>
            <button className='display_cart'
            onClick={() => handleEvent()}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </button>
        </div>
        )}
        {display && (
            <span>
        {itemCount}
        <div> 
            {subTotal > 0 && 
                <span> subtotal: {parseFloat(subTotal).toFixed(2)}</span>
            }
            </div>
            </span>
        )}
    </div>
);}
