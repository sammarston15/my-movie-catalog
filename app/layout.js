import './globals.css'

export const metadata = {
  title: 'My Movie Catalog',
  description: 'Explore movies, learn more, and manage custom lists across multiple UI concepts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
