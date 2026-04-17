'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { readWatchLaterIds } from '@/lib/watch-later'

export default function AppNav() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    function syncCount() {
      setCount(readWatchLaterIds().length)
    }

    syncCount()
    window.addEventListener('watch-later-updated', syncCount)

    return () => {
      window.removeEventListener('watch-later-updated', syncCount)
    }
  }, [])

  return (
    <nav className="app-nav">
      <Link href="/">Home</Link>
      <Link href="/2">Browse</Link>
      <Link href="/watch-later">Watch Later ({count})</Link>
    </nav>
  )
}
