import React, { useEffect, useState } from 'react';
import { fetchMovies } from './api/tmdb';
import MovieCard from './components/MovieCard';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          movie={movie}
      />
      ))}
    </div>
  );
};

export default App;
