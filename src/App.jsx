import { useEffect, useState } from 'react'; 
import MovieCard from './components/MovieCard'; 

function App() {
  const [movies, setMovies] = useState([]); 
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjNmOGQxYzQxN2FmNTg4YWUyYmIzMjlmZjIwNjdhNyIsIm5iZiI6MTc3MDQ4MDE2MS4wOTUsInN1YiI6IjY5ODc2MjIxNTM4ZGZkYzdjYjVkODcxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HKEZnAsV0wgLEnLEEFmjHn9rB6V0LjwQd3pJ-a7-BY8'
  }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
      .then(res=>res.json())
      .then(data =>{
        console.log(data); 
        setMovies(data.results)
      }); 
  }, []); 


  return(
  <>
  <div className="min-h-screen w-full align-center">
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-1">
      </div>
      <div className="col-span-4 grid grid-cols-6 gap-4"> 
        {movies.map( movie=> (
          <MovieCard 
          key={movie.id}
          title={movie.title}
          year={movie.release_dath} 
          poster={movie.poster_path}
          />
        ))}
      </div>
      <div className="col-span-1">
      </div>
    </div>
  </div>
  </>
  )
}

export default App;