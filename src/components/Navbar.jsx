import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import GenresDropdown from './GenresDropdown';

function Navbar({isOpen, setIsOpen}){

   const [isOpenGenres, setIsOpenGenres] = useState(false);

    return(
        <nav className="bg-black/20 backdrop-blur-md relative w-full px-6 py-4 flex items-center justify-between z-[100]">
            <div className="z-[110]">
                <Link to="/"><h1 className="text-xl font-bold"> <span>Le' </span><span className="font-bold text-orange-400">Flix</span></h1></Link>
            </div>

            <div className="hidden sm:flex text-sm items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <Link to="/" className={`hover:font-semibold`}>TRENDING</Link>
                <Link to="/top" className={`hover:font-semibold`}>TOP TMDB</Link>
                <GenresDropdown/>
            </div>
            <div className="flex items-center gap-4 z-[110]">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden flex flex-col gap-1.5 cursor-pointer p-1"
                >
                    <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>
            <div className={`fixed inset-0 bg-[#1c1b1b] flex min-h-screen flex-col items-center justify-center gap-10 transition-all duration-300 sm:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl hover:font-bold">TRENDING</Link>
                <Link to="/top" onClick={() => setIsOpen(false)} className="text-2xl hover:font-bold">TOP TMDB</Link>
                <div onClick={(e) => e.stopPropagation()}>
                    <GenresDropdown isOpenGenres={isOpenGenres}
                    setIsOpenGenres={setIsOpenGenres}
                    setIsOpen={setIsOpen}
                    onClick={()=> (setIsOpenGenres(!isOpenGenres))}/>
                </div>
            </div>
        </nav>
    ); 
}

export default Navbar;