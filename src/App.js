import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Menulist from './components/Menu'
import Header from './components/Header'
import Cart from './components/Cart'
function App () {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/menu')
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.error('Error fetching data from the server', error)
    });
  }, []);
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="App-body">
        <Cart prop={cart}/>
      <Routes>
        <Route exact
        path ="/"
        element ={<Home />}/>

        <Route exact
        path ="/menu"
        element={<Menulist data={data} addItem={setCart}/>}/>
        
        <Route exact
        path ="/about"/>
      </Routes>
      </div>
    </div>
    </Router>



  );
}

export default App;
