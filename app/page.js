import Link from 'next/link'

const destinations = [
  {
    href: '/2',
    title: 'Browse Movies',
    summary:
      'Open the Peacock-inspired catalog with poster rows, detail pages, and quick watch-later actions.',
  },
  {
    href: '/watch-later',
    title: 'Watch Later',
    summary:
      'See every saved movie in one place and remove titles as soon as you are done with them.',
  },
]

const HomePage = () => {
  return (
    <main className="home-shell">
      <div className="home-backdrop" />
      <section className="home-hero">
        <p className="eyebrow">Movie Catalog</p>
        <h1>Browse, save, and revisit movies with one polished catalog flow.</h1>
        <p>
          The home screen keeps the look you liked, while the main catalog now
          uses the warmer `/2` palette with a Peacock-style browsing layout,
          dedicated movie pages, and a separate watch-later destination.
        </p>
      </section>

      <section className="design-grid">
        {destinations.map((destination) => (
          <Link
            className="design-card"
            href={destination.href}
            key={destination.href}
          >
            <span className="design-path">{destination.href}</span>
            <h2>{destination.title}</h2>
            <p>{destination.summary}</p>
            <span className="design-cta">Open concept</span>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default HomePage
