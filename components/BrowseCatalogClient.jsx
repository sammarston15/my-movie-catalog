'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AppNav from '@/components/AppNav'
import WatchLaterToggle from '@/components/WatchLaterToggle'

export default function BrowseCatalogClient() {
  const [movies, setMovies] = useState([])
  const [collections, setCollections] = useState([])
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadCatalog() {
      try {
        const response = await fetch('/api/movies')
        const data = await response.json()

        if (!cancelled) {
          setMovies(data.movies)
          setCollections(data.collections)
          setFeaturedMovie(data.movies[0] ?? null)
          setLoading(false)
        }
      } catch {
        if (!cancelled) {
          setError('The movie catalog could not be loaded right now.')
          setLoading(false)
        }
      }
    }

    loadCatalog()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <main className="browse-shell">
        <div className="catalog-loading">Loading catalog...</div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="browse-shell">
        <div className="catalog-loading">{error}</div>
      </main>
    )
  }

  return (
    <main className="browse-shell">
      <div className="browse-backdrop" />
      <section className="browse-header">
        <div>
          <p className="eyebrow">Movie Catalog</p>
          <h1>Browse movies with a Peacock-inspired layout.</h1>
          <p className="catalog-intro">
            Save titles straight from each poster card, then open any movie for a
            dedicated detail page with the full synopsis, cast, and your saved
            status.
          </p>
        </div>
        <AppNav />
      </section>

      {featuredMovie && (
        <section className="hero-spotlight">
          <div
            className="hero-art"
            style={{ backgroundImage: `url(${featuredMovie.image})` }}
          />
          <div className="hero-copy">
            <p className="eyebrow">Featured tonight</p>
            <h2>{featuredMovie.title}</h2>
            <p className="hero-tagline">{featuredMovie.tagline}</p>
            <p>{featuredMovie.longDescription}</p>
            <div className="hero-facts">
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.rating}</span>
              <span>{featuredMovie.runtime}</span>
              <span>{featuredMovie.genre.join(' / ')}</span>
            </div>
            <div className="hero-actions">
              <Link className="primary-link" href={`/movies/${featuredMovie.id}`}>
                Learn more
              </Link>
              <WatchLaterToggle movieId={featuredMovie.id} />
            </div>
          </div>
        </section>
      )}

      <section className="catalog-rows">
        {collections.map((collection) => (
          <section className="content-row" key={collection.id}>
            <div className="row-heading">
              <h3>{collection.title}</h3>
              <span>{collection.movies.length} titles</span>
            </div>
            <div className="poster-row">
              {collection.movies.map((movie) => (
                <article className="poster-card" key={movie.id}>
                  <div
                    className="poster-image"
                    style={{ backgroundImage: `url(${movie.image})` }}
                  >
                    <div className="poster-overlay">
                      <WatchLaterToggle compact movieId={movie.id} />
                    </div>
                  </div>
                  <div className="poster-copy">
                    <div className="poster-title-line">
                      <div>
                        <h4>{movie.title}</h4>
                        <p>{movie.year} • {movie.genre[0]}</p>
                      </div>
                      <span>{movie.score}%</span>
                    </div>
                    <p className="poster-synopsis">{movie.synopsis}</p>
                    <Link className="detail-link" href={`/movies/${movie.id}`}>
                      Open details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}
