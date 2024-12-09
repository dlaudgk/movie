import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
    };

    getMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!movie) return <p>Movie not found.</p>;


  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        className="movie-banner"
      />
      <div className="movie-info">
        <div className="title_star">
          <h1 className='title'>{movie.title}</h1>
          <p className='star'>⭐ {movie.vote_average}</p>
        </div>
        <div className="genres">
          {movie.genres.map(genre => (
            <span key={genre.id} className="genre">
              {genre.name}
            </span>
          ))}
        </div>
        <p className='overview'>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
