import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./view/Landing";
import Shopping from "../src/view/Shopping";
import Header from "./component/Header";
import './assets/style.css';
function App() {
  return (
    <Router>
      
        <Header/>
        <div className="content">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

