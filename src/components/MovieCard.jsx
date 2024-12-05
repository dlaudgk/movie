import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to="/details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </Link>
    <h3>{movie.title}</h3>
    <p className='star'>⭐ {movie.vote_average}</p>
  </div>
);

export default MovieCard;
