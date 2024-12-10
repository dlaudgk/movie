import React, { useEffect, useState } from 'react';
import { fetchMovies, searchMovies } from './api/tmdb';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import { useDebounce } from './hooks/useDebounce';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const getMovies = async () => {
      if (debouncedSearchQuery) {
        const searchResults = await searchMovies(debouncedSearchQuery);
        setMovies(searchResults);
      } else {
        const movieData = await fetchMovies();
        setMovies(movieData);
      }
    };
    getMovies();
  }, [debouncedSearchQuery]);

  return (
    <>
      <NavBar onSearch={setSearchQuery} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
