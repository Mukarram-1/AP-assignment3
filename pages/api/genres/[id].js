import { getGenreById, getMoviesByGenre } from '@/lib/movieFunctions';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const genre = await getGenreById(id);
      
      if (!genre) {
        return res.status(404).json({ message: `Genre with ID ${id} not found` });
      }
      genre.movies = await getMoviesByGenre(id);

      res.status(200).json(genre);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching genre details', error: error.message });
    }
  }
} 