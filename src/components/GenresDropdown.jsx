import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DropdownItem from './DropdownItem';
import HorizontalLine from './HorizontalLine';

function GenresDropdown({isOpenGenres, setIsOpenGenres, setIsOpen}){
    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .trim();
    };

    const genres = ["Horror", "Crime", "Romance", "Documentary", "Thriller", "Comedy", "Action", "Science fiction", "Animation", "Music", "Mystery", "Adventure"]; 

    return(
    <div onClick={()=> {setIsOpenGenres(!isOpenGenres); }} className="justify-center animate-in relative group backdrop-blur-md text-2xl sm:text-sm ">
        <div className="flex justify-center">
            <h1 className="group-hover:font-semibold hover:font-semibold cursor-pointer">GENRES</h1>
            <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isOpenGenres ? "-rotate-180" : ""} m-1 transition-transform duration-300 lucide lucide-chevron-down-icon lucide-chevron-down sm:hidden`}><path d="m6 9 6 6 6-6"/></svg>
            </span>
        </div>
        <div className={`${isOpenGenres ? "opacity-100 visible" : ""} relative max-h-0 max-h-[500px] sm:absolute left-0 mt-3 sm:mt-1 w-80 md:w-60 bg-[#1c1b1b] sm:border-1 sm:border-white/10 rounded-md shadow-xl 
                      opacity-0 invisible sm:group-hover:opacity-100 sm:group-hover:visible 
                      transition-all duration-200 z-50 `}>
            <div className="flex justify-center sm:justify-start">
                <div className="grid text-sm sm:text-start grid-cols-2 gap-1 gap-x-5 pt-3 sm:pt-0 md:gap-2 md:px-2 md:py-2">
                        {genres.map((genre, index) => (
                            <Link onClick={()=> setIsOpen(false)} key={index} to={`/genres/${slugify(genre)}`}> <DropdownItem genre={genre}></DropdownItem></Link>
                        ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default GenresDropdown;