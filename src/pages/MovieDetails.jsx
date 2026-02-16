import { useEffect, useState } from 'react'; // Dodan useState
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx';
import MovieCard from '../components/MovieCard.jsx'; 

function MovieDetails(){
    const {movieName} = useParams(); 
    const [movie, setMovie] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }};

    useEffect(()=>{
        let movieID = movieName.split('-')[0]; 
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${movieID}similar?append_to_response=videos,images,similar`, options)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setLoading(false);
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
        });
    }, [movieName]);

    const trailer= movie?.videos?.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    )

    const backupVideo = movie?.videos?.results?.[0];
    const finalVideo = trailer || backupVideo; 
    return(
        <div className="w-full h-full flex justify-center mt-5">
            {loading ? ( <Spinner/> 
            ) :( 
                <div className="md:w-3/4 flex flex-col">
                    <h1 className={`md:text-5xl mb-2 font-semibold`}> {movie?.title}</h1>
                    <div className="flex flex-row items-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <span className="ms-1 text-lg">{Math.round(movie.vote_average*10) /10}</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-1/3">
                            <img draggable="false" className="transition-all duration-100 hover:brightness-60 rounded-l-xl w-full h-full object-cover" alt="image" src={movie?.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=Ni+slike'}></img>
                        </div>
                        <div className="w-2/3">
                            {finalVideo ? 
                            (
                            <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${finalVideo.key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className=' transition-all duration-100 hover:brightness-60 rounded-r-xl w-full h-full'></iframe>
                            ) : (
                                <h1>Ni videa</h1>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                        {movie.genres.map((genre) => (
                            <Link key={genre.id} to={`/genres/${genre.name.toLowerCase()}`}><div className="border-1 text-medium rounded-xl border-orange hover:bg-white font-semibold hover:text-black hover:cursor-pointer p-2" >{genre.name}</div></Link>
                        ))}
                    </div>
                    <div className="mt-4 mb-8">
                        <span className="md:text-2xl">{movie?.overview}</span>
                    </div>
                    <div className="m-15 "> 
                        <Carousel movie={movie}/>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">Watch also</h1>
                    </div>
                    <div className="w-full flex gap-2 mt-3 mb-2">
                        {movie.similar.results.slice(0,5).map( (element, index) => (
                            <MovieCard 
                            title={element.title}
                            year={element.release_date}
                            poster={element.poster_path}
                            language={element.original_language}
                            rating={element.vote_average}
                            overview={element.overview}
                            viewMode="grid"
                            id={element.id}/>
                        ))}
                    </div>
                </div> 
            )}
        </div> 
    )
}

export default MovieDetails; 