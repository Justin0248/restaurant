import React, { useEffect, useState } from 'react';
import './App.scss';
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
    <div className="App">
      <Header/>
      <div className="App-body">
        <Menulist data={data}></Menulist>
      </div>
    </div>
  );
}

export default App;
