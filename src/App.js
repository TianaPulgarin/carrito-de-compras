import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './view/Landing/Landing';
import Shopping from './view/Shopping/Shopping';
import Header from "./component/Header";
import './assets/style.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/compra/:categoryName" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
