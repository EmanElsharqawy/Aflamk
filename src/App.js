import React from 'react';
import NavScrollExample from './Component/NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'; 
import "./App.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Component/Footer';
import { Routes, Route } from 'react-router-dom';   
import Movies from './pages/Movies';
import Series from './pages/Series';
import Contact from './pages/Contact';
import Moviedetails from './Component/Movies_component/Moviedetails';
import Seriesdetails  from "./Component/Series_component/Seriesdetails"
import ScrollToTop from "./Component/Series_component/ScrollToTop";

function App() {
  return (
    <div>
      <NavScrollExample />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Series" element={<Series/>} />  
        <Route path="/Contact" element={<Contact/>} />
         <Route path="/movies/:id" element={<Moviedetails />} />
         <Route path="/Series/:id" element={<Seriesdetails />} />
         
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
