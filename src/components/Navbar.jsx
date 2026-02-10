import { useEffect, useState } from 'react'

function Navbar(){
    return(
        <div className="navbar w-full bg-[#1c1b1b]  px-6 py-4 flex items-center justify-between">
            <div>
                <h1>Ka je to</h1>
            </div>
            <div className="flex gap-8 ">
                <h1 className="">Trending</h1>
                <h1 className="">Genres</h1>
                <h1 className="">AI</h1>
            </div>
            <div className="flex items-center gap-1">
                <h1>Log in </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>
            </div>
        </div>
    ); 
}

export default Navbar; 