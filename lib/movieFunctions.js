import { prisma } from './prisma';

export async function getAllMovies() {
  return await prisma?.movie.findMany() || [];
}

export async function getTrendingMovies() {
  const movies = await getAllMovies();
  return movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export async function getMovieById(id) {
  return await prisma?.movie.findUnique({
    where: { id }
  }) || null;
}

export async function getAllGenres() {
  return await prisma?.genre.findMany() || [];
}

export async function getGenreById(id) {
  return await prisma?.genre.findUnique({
    where: { id }
  }) || null;
}

export async function getAllDirectors() {
  return await prisma?.director.findMany() || [];
}

export async function getDirectorById(id) {
  return await prisma?.director.findUnique({
    where: { id }
  }) || null;
}

export async function getMoviesByGenre(genreId) {
  return await prisma?.movie.findMany({
    where: { genreId }
  }) || [];
}

export async function getMoviesByDirector(directorId) {
  return await prisma?.movie.findMany({
    where: { directorId }
  }) || [];
}
