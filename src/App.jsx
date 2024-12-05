import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
