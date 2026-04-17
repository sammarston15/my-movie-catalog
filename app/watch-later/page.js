import WatchLaterPageClient from '@/components/WatchLaterPageClient'
import { movies } from '@/lib/movies'

export const metadata = {
  title: 'Watch Later | Movie Catalog',
}

export default function WatchLaterPage() {
  return <WatchLaterPageClient movies={movies} />
}
