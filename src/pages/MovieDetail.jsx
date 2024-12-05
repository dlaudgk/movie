import React from 'react';
import movieDetailData from './movieDetailData.json';
import './MovieDetail.css';

const MovieDetail = () => {
  const movie = movieDetailData;

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
