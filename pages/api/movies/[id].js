import { getMovieById } from '@/lib/movieFunctions';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const movie = await getMovieById(id);
      
      if (!movie) {
        return res.status(404).json({ message: `Movie with ID ${id} not found` });
      }

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching movie details', error: error.message });
    }
  }
} 