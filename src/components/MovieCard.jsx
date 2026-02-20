import { Link } from 'react-router-dom';

function MovieCard({ title, year, poster, language, rating, overview, viewMode, id }) {
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

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    return (
        <Link to={`/movie/${id}-${slugify(title)}`}>
            <div className={`group overflow-hidden ${viewMode === 'grid' ? 'flex flex-col' : 'flex flex-row w-5/6 h-60'}`}>
                
                <div className={`${viewMode === 'grid' ? 'w-full' : 'flex-shrink-0 h-full'} 
                    grid place-items-center overflow-hidden aspect-[2/3] rounded-lg relative`}>
                    <img 
                        draggable="false" 
                        className="col-start-1 row-start-1 w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" 
                        alt={title} 
                        src={poster ? `${IMAGE_BASE_URL}${poster}` : 'https://via.placeholder.com/500x750?text=Ni+slike'} 
                    />
                    <span className="col-start-1 row-start-1 hidden group-hover:flex z-10 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                        </svg>
                    </span>
                </div>

                <div className={`${viewMode === 'grid' ? 'mt-2' : 'ml-4 flex flex-col '}`}>
                    <div>
                        <h2 className={`truncate font-medium text-xl ${viewMode === 'grid' ? '' : 'w-full'}`}>
                            {title}
                        </h2>
                        <span className={`${viewMode === 'grid' ? 'hidden' : 'flex text-sm line-clamp-3 italic text-gray-400 mt-2'}`}>
                            {overview}
                        </span>
                    </div>
                    
                    <div className={`flex items-center gap-4 mt-1 text-sm text-gray-400 ${viewMode === 'grid' ? 'justify-between' : ''}`}>
                        <div>{year?.split('-')[0]}</div>
                        <div>{language?.toUpperCase()}</div>
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="yellow" stroke="yellow" className="lucide-star">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
                            </svg>
                            <span className="text-white font-medium">{Math.round(rating * 10) / 10}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;