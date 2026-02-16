import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home.jsx'; 
import MovieDetails from './pages/MovieDetails.jsx'; 
import ScrollToTop from './components/ScrollToTop.jsx';
import Login from './pages/Login.jsx'; 

function App() {
  
  return(
  <BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<Home />} />
            <Route path="/genres/:genreName" element={<Home />} />
            <Route path="/movie/:movieName" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    } />
  </Routes>
  </BrowserRouter>
  )
}

export default App;