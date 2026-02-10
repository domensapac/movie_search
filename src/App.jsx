import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import MovieCard from './components/MovieCard'; 
import SearchBar from './components/SearchBar'; 
import Navbar from './components/Navbar'; 
import Pagination from './components/Pagination';
import Spinner from './components/Spinner'; 
import ViewSelector from './components/ViewSelector';
import Footer from './components/Footer'; 

function App() {
  const [currPage, setCurrPage] = useState(1); 
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [viewMode, setViewMode] = useState('grid'); 

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }};

  const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currPage}`; 
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const base_url = "https://api.themoviedb.org/3";
      const endpoint = searchQuery.trim().length > 0
        ? `/search/movie?query=${encodeURIComponent(searchQuery)}&page=${currPage}`
        : `/movie/popular?language=en-US&page=${currPage}`;

      fetch(`${base_url}${endpoint}`, options)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results || []);
          setLoading(false);
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
}, [searchQuery, currPage]);
  return(
    <BrowserRouter>
  <>
  <div>
      <Navbar/>
  </div>
  <div className="mt-5 min-h-screen w-full align-center">
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-1">
          <SearchBar
          setSearchQuery={setSearchQuery}/>
      </div>
      <div className= {`mt-7 justify-center items-center ${viewMode === 'grid' ? 'col-span-4 grid grid-cols-5 gap-5' : 'col-span-4 flex flex-col gap-6'} `}> 
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
  <div className="grid grid-cols-6 gap-4">
  </div>
  <div>
    <Footer/>
  </div>
  </>
  </BrowserRouter>
  )
}

export default App;