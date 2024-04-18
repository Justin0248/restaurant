import React from 'react'
import './Menu.scss'
import Button from './cart/Button'
import { useEffect, useState } from 'react';

export default function Menulist({data, props, addItem}) {
if (!data) {
    return <p>Loading...</p>;
}
const [count, setCount] = useState(0)

const handleEvent = (id, name, price) => {
addItem(prevCart => [...prevCart, { count, name, price }])
setCount(count + 1);
}
const categories = [...new Set(data.map(item => item.category))];

return (
      <div className = "menu_container">
      <h1 className="section"><span className ="section_border">Menu</span></h1>
        {categories.map(category => (
          <div key={category}>
            <h2 className= "category">{category}</h2>
            <ol className="menu_items">
              {data.filter(item => item.category === category).map(item => (
                <li key={item.id}>
                 {item.id}. {item.name}: ${item.price} 
                 <div>
                  <button name={item.id} onClick={() => {handleEvent(item.id, item.name, item.price)}}>
                  Add to cart
                  </button>
                 </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
  );
}