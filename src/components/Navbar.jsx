import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GenresDropdown from './GenresDropdown';

function Navbar(){
    return(
        <div className="z-50 sticky relative top-0 navbar w-full bg-[#1c1b1b] px-6 py-2 flex items-center justify-between">
            <div>
                <h1>Ka je to</h1>
            </div>
            <div className="absolute insert-1 flex w-full items-center justify-center">
                <div className="flex w-fit gap-8 ">
                    <Link to="/"><h1 className="hover:font-semibold">TRENDING</h1></Link>
                    <Link to="/top"><h1 className="hover:font-semibold">TOP TMDB</h1></Link>
                    <GenresDropdown/>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <h1>Log in </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>
            </div>
        </div>
    ); 
}

export default Navbar; 