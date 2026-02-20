function ViewSelector({setViewMode, viewMode})
{
    return(
    <div className="flex">
        <button onClick={()=>setViewMode('grid')} disabled={viewMode === 'grid'} className={`disabled:cursor-not-allowed text-white disabled:text-orange-400 hover:cursor-pointer`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={`${viewMode === 'grid' ? "2" : "1"}`} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 lg:w-6 lg:h-6 lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg></button>
        <button onClick={ ()=>setViewMode('list')} disabled={viewMode === 'list'} className={`disabled:cursor-not-allowed text-white disabled:text-orange-400 hover:cursor-pointer `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={`${viewMode === 'grid' ? "1" : "2"}`} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 lg:w-6 lg:h-6 lucide lucide-rows3-icon lucide-rows-3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg></button>
    </div>
    )
}

export default ViewSelector; 