import { useEffect, useState } from 'react'

function MovieCard({title, year, poster}){
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    return( 
        <div className="flex flex-col">
            <h3> {title}</h3>
            <h4> {year}</h4>
            <img className="object-contain" alt="image" src={poster? `${IMAGE_BASE_URL}${poster}` : 'https://via.placeholder.com/500x750?text=Ni+slike'}></img>
        </div>
    ); 
}  

export default MovieCard; 