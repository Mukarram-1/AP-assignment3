import data from '../data.json';

export function getAllData() {
  return data;
}

export function getAllMovies() {
  const data = getAllData();
  return data.movies;
}

export function getTrendingMovies() {
  const movies = getAllMovies();
  return movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export function getMovieById(id) {
  const movies = getAllMovies();
  return movies.find((movie) => movie.id === id);
}

export function getAllGenres() {
  const data = getAllData();
  return data.genres;
}

export function getGenreById(id) {
  const genres = getAllGenres();
  return genres.find((genre) => genre.id === id);
}

export function getAllDirectors() {
  const data = getAllData();
  return data.directors;
}

export function getDirectorById(id) {
  const directors = getAllDirectors();
  return directors.find((director) => director.id === id);
}

export function getMoviesByGenre(genreId) {
  const movies = getAllMovies();
  return movies.filter((movie) => movie.genreId === genreId);
}

export function getMoviesByDirector(directorId) {
  const movies = getAllMovies();
  return movies.filter((movie) => movie.directorId === directorId);
}
