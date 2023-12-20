import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import Home from './Home';
import AdDetails from './AdDetails';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ad/:id" element={<AdDetails />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
