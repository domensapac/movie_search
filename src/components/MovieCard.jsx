import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MovieCard({title, year, poster, language, rating, overview, viewMode, id}){
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    return( 
        <Link to={`/movie/${id}-${title.replace(/\s/g, "").toLowerCase()}`}>
        <div className= {`group overflow-auto ${viewMode === 'grid' ? 'flex flex-col' : ' flex flex-row w-5/6 h-60 '}`}>
            <div className={` ${viewMode === 'grid' ? 'w-full' : 'flex flex-start h-full'} flex-shrink-0 overflow-hidden aspect-[2/3] rounded-lg`}>
                <img draggable="false" className="w-full object-cover transition-all duration-100 group-hover:brightness-60" alt="image" src={poster? `${IMAGE_BASE_URL}${poster}` : 'https://via.placeholder.com/500x750?text=Ni+slike'}></img>
            </div>
            <div className={` ${viewMode === 'grid' ? '' : 'ml-3'}`}>
                <div>
                    <h2 className= {` truncate font-medium text-xl ${viewMode === 'grid' ? '' : 'w-4/6 '}`}> {title}</h2>
                    <span className={` ${viewMode === 'grid' ? 'hidden' : 'flex text-sm line-clamp-4 italic'}`} > {overview}</span>
                </div>
                <div className= {` ${viewMode === 'grid' ? 'flex justify-between mt-1 ' : 'flex-end '}`}> 
                    <div className=""> {year.split('-')[0]} </div>
                    <div className="">{language.toUpperCase()}</div>
                    <div className="flex justfiy-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/><path d="M7 10v12"/></svg>
                        {Math.round(rating*10) /10}</div>
                </div>
            </div>
        </div>
        </Link>
    ); 
}  

export default MovieCard; 