export const WATCH_LATER_KEY = 'movie-catalog-watch-later'

export function readWatchLaterIds() {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(WATCH_LATER_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeWatchLaterIds(ids) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(WATCH_LATER_KEY, JSON.stringify(ids))
  window.dispatchEvent(new Event('watch-later-updated'))
}

export function toggleWatchLaterId(movieId) {
  const currentIds = readWatchLaterIds()
  const nextIds = currentIds.includes(movieId)
    ? currentIds.filter((id) => id !== movieId)
    : [...currentIds, movieId]

  writeWatchLaterIds(nextIds)
  return nextIds
}
