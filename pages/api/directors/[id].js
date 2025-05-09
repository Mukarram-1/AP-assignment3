import { getDirectorById, getMoviesByDirector } from '@/lib/movieFunctions';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const director = await getDirectorById(id);
      
      if (!director) {
        return res.status(404).json({ message: `Director with ID ${id} not found` });
      }
      director.movies = await getMoviesByDirector(id);

      res.status(200).json(director);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching director details', error: error.message });
    }
  }
} 