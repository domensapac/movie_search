import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home.jsx'; 
import MovieDetails from './pages/MovieDetails.jsx'; 
import ScrollToTop from './components/ScrollToTop.jsx';
function App() {
  
  return(
  <BrowserRouter>
    <div className="flex flex-col min-h-[120vh]">
      <ScrollToTop/>
      <Navbar/>
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/top" element={<Home/>}/>
        <Route path="/genres/:genreName" element={<Home/>}/>
        <Route path="/movie/:movieName" element={<MovieDetails/>}/>
      </Routes>
    </main>
    <div>
      <Footer/>
    </div>
    </div>
  </BrowserRouter>
  )
}

export default App;