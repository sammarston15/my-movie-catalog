import { getMoviesForCollection, movieCollections, movies } from '@/lib/movies'

export async function GET() {
  return Response.json({
    movies,
    collections: movieCollections.map((collection) => ({
      ...collection,
      movies: getMoviesForCollection(collection.match),
    })),
  })
}
