import { React } from 'react';
import './Menu.scss'
import CartButton from './cartButton'

export default function Menulist({data, addItem, addCount}) {
if (!data) {
    return <p>Loading...</p>;
}
  
const categories = [...new Set(data.map(item => item.category))];
  const handleEvent = (id, name, price, count) => {
      addItem(id, name, price, count)
  }
  const handleCount = (id, count, name) => {
     addCount(id, count, name)
  }

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
                 <CartButton 
                 name={item.name} 
                 price={item.price}
                 handleEvent={handleEvent}
                 handleCount={handleCount}
                 ></CartButton>
                 </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
  );
}