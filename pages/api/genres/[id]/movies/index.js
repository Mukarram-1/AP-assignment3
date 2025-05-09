import { getMoviesByGenre } from '@/lib/movieFunctions';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { id } = req.query;
            const movies = await getMoviesByGenre(id);
            res.status(200).json(movies);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching movies', error: error.message });
        }
    }
}
