'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import AppNav from '@/components/AppNav'
import WatchLaterToggle from '@/components/WatchLaterToggle'
import { readWatchLaterIds } from '@/lib/watch-later'

export default function WatchLaterPageClient({ movies }) {
  const [savedIds, setSavedIds] = useState([])

  useEffect(() => {
    function syncSaved() {
      setSavedIds(readWatchLaterIds())
    }

    syncSaved()
    window.addEventListener('watch-later-updated', syncSaved)

    return () => {
      window.removeEventListener('watch-later-updated', syncSaved)
    }
  }, [])

  const savedMovies = useMemo(
    () => movies.filter((movie) => savedIds.includes(movie.id)),
    [movies, savedIds]
  )

  return (
    <main className="browse-shell">
      <div className="browse-backdrop" />
      <section className="browse-header">
        <div>
          <p className="eyebrow">Your List</p>
          <h1>Watch Later</h1>
          <p className="catalog-intro">
            Keep the titles you want to revisit in one place, then remove them
            when you are ready to move on.
          </p>
        </div>
        <AppNav />
      </section>

      <section className="watch-later-panel">
        {savedMovies.length ? (
          <div className="watch-grid">
            {savedMovies.map((movie) => (
              <article className="watch-card" key={movie.id}>
                <div
                  className="watch-poster"
                  style={{ backgroundImage: `url(${movie.image})` }}
                />
                <div className="watch-copy">
                  <p className="eyebrow">Saved title</p>
                  <h2>{movie.title}</h2>
                  <p>{movie.synopsis}</p>
                  <div className="hero-facts">
                    <span>{movie.year}</span>
                    <span>{movie.rating}</span>
                    <span>{movie.runtime}</span>
                  </div>
                  <div className="hero-actions">
                    <Link className="primary-link" href={`/movies/${movie.id}`}>
                      View movie
                    </Link>
                    <WatchLaterToggle movieId={movie.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Your watch-later list is empty.</h2>
            <p>
              Add a movie from the browse page and it will appear here
              immediately.
            </p>
            <Link className="primary-link" href="/2">
              Browse the catalog
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
