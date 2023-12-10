import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './view/Landing/Landing'
import Shopping from './view/Shopping/Shopping'
import Header from "./component/Header";
import './assets/style.css';
function App() {
  return (
    <Router>
      
        <Header/>
        
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    
    </Router>
  );
}

export default App;

