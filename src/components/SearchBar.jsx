import { useEffect, useState } from 'react'

function SearchBar({setSearchQuery}){
    const handleChange = (event)=>{
        const value= event.target.value; 
        setSearchQuery(value); 
    }

    return(
        <form>
            <input className="mt-4 ml-4 p-1 border-b-1 focus:ring-0 focus: outline-none" type="text" name="movieSearch" placeholder="Search for a movie.." onChange={handleChange}></input>
        </form>
    ); 
}

export default SearchBar; 