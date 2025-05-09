import { getAllDirectors } from '@/lib/movieFunctions';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const directors = await getAllDirectors();
            for (const director of directors) {
                director.movies = await import('@/lib/movieFunctions').then(
                    module => module.getMoviesByDirector(director.id)
                );
            }
            res.status(200).json(directors);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching directors', error: error.message });
        }
    }
}
