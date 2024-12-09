const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async () => {
  const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
  const data = await response.json();
  return data.results.filter(movie => !movie.adult);
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
  const data = await response.json();
  return data;
};

