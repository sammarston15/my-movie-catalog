'use client'

import { useEffect, useState } from 'react'
import { readWatchLaterIds, toggleWatchLaterId } from '@/lib/watch-later'

export default function WatchLaterToggle({ movieId, className = '', compact = false }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    function syncSaved() {
      setSaved(readWatchLaterIds().includes(movieId))
    }

    syncSaved()
    window.addEventListener('watch-later-updated', syncSaved)

    return () => {
      window.removeEventListener('watch-later-updated', syncSaved)
    }
  }, [movieId])

  function handleClick(event) {
    event.preventDefault()
    event.stopPropagation()
    const nextIds = toggleWatchLaterId(movieId)
    setSaved(nextIds.includes(movieId))
  }

  return (
    <button
      className={`watch-later-button ${compact ? 'is-compact' : ''} ${
        saved ? 'is-saved' : ''
      } ${className}`.trim()}
      onClick={handleClick}
      type="button"
    >
      {saved ? 'Remove from Watch Later' : 'Add to Watch Later'}
    </button>
  )
}
