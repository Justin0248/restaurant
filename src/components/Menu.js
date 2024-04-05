import React from 'react';
import './Menu.scss'
export default function Menulist({data}) {
if (!data) {
    return <p>Loading...</p>;
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
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
  );
}