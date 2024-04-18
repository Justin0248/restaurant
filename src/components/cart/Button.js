import react from 'react';
import { useEffect, useState } from 'react';


export default function Button( {props} ) {
    const [cart, setCart] = useState({});
    const handleEvent = function() {
        setCart(cart => ({
          id: props
        }));
        }
        useEffect(() => {
            console.log(cart);
          }, [cart]);
return (
<button 
name = {props}
onClick={handleEvent}>
Add to cart    
</button>
);
}