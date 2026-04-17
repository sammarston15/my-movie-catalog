import { notFound } from 'next/navigation'
import MovieDetailClient from '@/components/MovieDetailClient'
import { getMovieById, movies } from '@/lib/movies'

export function generateStaticParams() {
  return movies.map((movie) => ({ id: movie.id }))
}

export function generateMetadata({ params }) {
  const movie = getMovieById(params.id)

  return {
    title: movie ? `${movie.title} | Movie Catalog` : 'Movie | Movie Catalog',
  }
}

export default function MovieDetailsPage({ params }) {
  const movie = getMovieById(params.id)

  if (!movie) {
    notFound()
  }

  return <MovieDetailClient movie={movie} />
}
