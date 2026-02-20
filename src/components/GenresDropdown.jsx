import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DropdownItem from './DropdownItem';

function GenresDropdown(){
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
    <div className="animate-in relative group backdrop-blur-md text-2xl sm:text-sm">
        <h1 className="group-hover:font-semibold hover:font-semibold cursor-pointer">GENRES</h1>
        <div className="absolute left-0 mt-1 w-80 md:w-60 bg-[#1c1b1b] border-1 border-white/10 rounded-md shadow-xl 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 z-50">
            <div className="grid grid-cols-2 md:gap-2 md:px-2 md:py-2">
                    {genres.map((genre, index) => (
                        <Link key={index} to={`/genres/${slugify(genre)}`}> <DropdownItem genre={genre}></DropdownItem></Link>
                    ))}
            </div>
        </div>
    </div>
    );
}

export default GenresDropdown;