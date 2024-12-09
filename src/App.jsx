import React, { useEffect, useState } from 'react';
import { fetchMovies } from './api/tmdb';
import MovieCard from './components/MovieCard';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      console.log(movieData);
    };
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id} 
          posterPath={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
          onClick={() => navigate(`/details/${movie.id}`)}
      />
      ))}
    </div>
  );
};

export default App;
