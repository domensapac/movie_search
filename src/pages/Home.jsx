import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';
import ViewSelector from '../components/ViewSelector';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Home(){
  const [currPage, setCurrPage] = useState(1); 
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [viewMode, setViewMode] = useState('grid'); 
  const {genreName} = useParams(); 
  const [pages, setPages] = useState(1); 
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }};

  const genreIds = {
    action: 28,
    comedy: 35,
    horror: 27,
    crime: 80,
    romance: 10749,
    thriller: 53,
    documentary: 99,
    mystery: 9648,
    adventure: 12,
    drama: 18 
};

  const location = useLocation();
  useEffect(()=> {
    setCurrPage(1); 
  }, [location.pathname]); 

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const base_url = "https://api.themoviedb.org/3";
      let endpoint = ""; 
      if(searchQuery.trim().length > 0){
        endpoint= `/search/movie?query=${encodeURIComponent(searchQuery)}&page=${currPage}`
      }
      else if(location.pathname === '/top'){
        endpoint = `/movie/top_rated?language=en-US&page=${currPage}`; 
      }
      else if(genreName){
        const id= genreIds[genreName.toLowerCase()]; 
        endpoint = `/discover/movie?with_genres=${id}&page=${currPage}`;
      }
      else{
        endpoint= `/movie/popular?language=en-US&page=${currPage}`;
      }

      fetch(`${base_url}${endpoint}`, options)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results || []);
          setLoading(false);
          console.log(data); 
          setPages(data.total_pages); 
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

  if (searchQuery.trim().length === 0) {
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const delay = setTimeout(() => {
      fetchData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);

    return () => clearTimeout(delay);
  }
}, [searchQuery, currPage, location.pathname]);


return (
<div className="mt-5 min-h-screen w-full align-center">
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div className="col-span-1">
          {location.pathname=== "/" ? <SearchBar
          setSearchQuery={setSearchQuery}/> : ""}
      </div>
      <div className= {`mt-7 justify-center lg:col-span-4  ${viewMode === 'grid' ? ' grid grid-cols-2 lg:grid-cols-5 gap-5' : 'flex flex-col gap-6'} `}> 
        {loading ? (
          <Spinner />
        ) : (
          <>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.release_date}
                poster={movie.poster_path}
                language={movie.original_language}
                rating={movie.vote_average}
                overview={movie.overview}
                viewMode={viewMode}
                id={movie.id}
              />
            ))}

            <div className="col-span-5 flex justify-center mt-8 mb-12">
              <Pagination className="col-span-full flex justify-center mt-10"
                currPage={currPage} 
                setCurrPage={setCurrPage} 
                totalPages={500} 
              />
            </div>
          </>
        )}
      </div>
      <div className="col-span-1 align-center justify-center">
          <ViewSelector 
          setViewMode={setViewMode}
          viewMode={viewMode}/>
      </div>
    </div>
  </div>
);
}

export default Home; 