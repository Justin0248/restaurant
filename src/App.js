import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Menulist from './components/Menu'
import Header from './components/Header'

function App() {
  const [data, setData] = useState(null);
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
      <Routes>
        <Route exact
        path ="/"/>

        <Route exact
        path ="/menu"
        element={<Menulist data={data}/>}/>
        
        <Route exact
        path ="/about"/>
      </Routes>
      </div>
    </div>
    </Router>



  );
}

export default App;
