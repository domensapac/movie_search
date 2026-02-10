import { useEffect, useState } from 'react'

function MovieCard({title, year, poster, language, rating, overview, viewMode}){
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    return( 
        <div className= {`overflow-auto ${viewMode === 'grid' ? 'flex flex-col' : ' flex flex-row w-5/6 h-60 '}`}>
            <div className={` ${viewMode === 'grid' ? 'flex ' : 'flex flex-start h-full'} flex-shrink-0 overflow-hidden rounded-lg`}>
                <img draggable="false" className="h-fulltransition-all duration-100 hover:brightness-60 object-contain" alt="image" src={poster? `${IMAGE_BASE_URL}${poster}` : 'https://via.placeholder.com/500x750?text=Ni+slike'}></img>
            </div>
            <div className={` ${viewMode === 'grid' ? '' : 'ml-3'}`}>
                <div>
                    <h2 className= {`font-medium text-xl ${viewMode === 'grid' ? '' : 'w-4/6 '}`}> {title}</h2>
                    <span className={` ${viewMode === 'grid' ? 'hidden' : 'flex text-sm line-clamp-4 italic'}`} > {overview}</span>
                </div>
                <div className= {` ${viewMode === 'grid' ? 'flex justify-between mt-1 ' : 'flex-end '}`}> 
                    <div className=""> {year.split('-')[0]} </div>
                    <div className="">{language.toUpperCase()}</div>
                    <div className=""> {Math.round(rating*10) /10}</div>
                </div>
            </div>
        </div>
    ); 
}  

export default MovieCard; 