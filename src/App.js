import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Menulist from './components/Menu'
import Header from './components/Header'
import Cart from './components/Cart'
import CartButton from './components/cartButton'
import menuItems from './menu/MenuItem'
function App () {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(1);
  const addItem = (id, name, price, count) => {
    setCart(prevCart => [...prevCart, {id, name, price, count}])
  }
  const addCount = (id, count, name) => {
    const changeCount = cart.map(item => (item.id === id && item.name === name ? {...item, count: parseFloat(count)} : item))
    setCart(changeCount)
  }
  useEffect(() => {
    axios.get('http://localhost:5000/menu')
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
       console.error('Error fetching data from the server', error)
    });
  }, []);
  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="App-body">
        <Cart prop={cart} count={count}/>
      <Routes>
        <Route exact
        path ="/"
        element ={<Home />}/>

        <Route exact
        path ="/menu"
        element={<Menulist data={menuItems} addItem={addItem} addCount={addCount} />}/>
        
        <Route exact
        path ="/about"/>
      </Routes>
      </div>
    </div>
    </Router>



  );
}

export default App;
