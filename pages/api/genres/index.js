import { getAllGenres } from '@/lib/movieFunctions';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const genres = await getAllGenres();
            for (const genre of genres) {
                genre.movies = await import('@/lib/movieFunctions').then(
                    module => module.getMoviesByGenre(genre.id)
                );
            }
            res.status(200).json(genres);
        }
        catch (error) {
            res.status(500).json({ message: 'Error fetching genres', error: error.message });
        }
    }
}
