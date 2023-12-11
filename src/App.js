import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './view/Landing/Landing';
import Shopping from './view/Shopping/Shopping';
import Header from "./component/Header";
import Order from './component/Order/Order';
import './assets/style.css';
import './App.css'

function App() {
  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/compra/:categoryName" element={<Shopping />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
