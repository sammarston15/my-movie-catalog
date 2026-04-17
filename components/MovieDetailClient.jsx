'use client'

import AppNav from '@/components/AppNav'
import WatchLaterToggle from '@/components/WatchLaterToggle'

export default function MovieDetailClient({ movie }) {
  return (
    <main className="browse-shell">
      <div className="browse-backdrop" />
      <section className="browse-header">
        <div>
          <p className="eyebrow">Movie Details</p>
          <h1>{movie.title}</h1>
          <p className="catalog-intro">{movie.tagline}</p>
        </div>
        <AppNav />
      </section>

      <section className="detail-page-panel">
        <div
          className="detail-page-poster"
          style={{ backgroundImage: `url(${movie.image})` }}
        />
        <div className="detail-page-copy">
          <p>{movie.longDescription}</p>
          <div className="hero-facts">
            <span>{movie.year}</span>
            <span>{movie.rating}</span>
            <span>{movie.runtime}</span>
            <span>{movie.score}% match</span>
          </div>

          <div className="detail-info-grid">
            <div>
              <h2>Overview</h2>
              <p>{movie.synopsis}</p>
            </div>
            <div>
              <h2>Director</h2>
              <p>{movie.director}</p>
            </div>
            <div>
              <h2>Cast</h2>
              <p>{movie.cast.join(', ')}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <p>{movie.genre.join(', ')}</p>
            </div>
          </div>

          <div className="hero-actions">
            <WatchLaterToggle movieId={movie.id} />
          </div>
        </div>
      </section>
    </main>
  )
}
