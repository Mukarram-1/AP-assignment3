import { getTrendingMovies } from '@/lib/movieFunctions';

export default async function handler(req,res){
    if(req.method === 'GET'){
        try{
            const trendingMovies = await getTrendingMovies();
            res.status(200).json(trendingMovies);
        }
        catch(error){
            res.status(500).json({message:'Error fetching trending movies',error:error.message});
        }
    }
}
