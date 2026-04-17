export const movies = [
  {
    id: 'arrival',
    title: 'Arrival',
    year: 2016,
    runtime: '1h 56m',
    rating: 'PG-13',
    genre: ['Sci-Fi', 'Drama'],
    score: 94,
    director: 'Denis Villeneuve',
    cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
    tagline: 'Why are they here, and how do we answer them?',
    synopsis:
      'A linguist is recruited to communicate with mysterious visitors whose arrival may change humanity’s understanding of time.',
    longDescription:
      'Tense, humane, and cerebral, Arrival turns first contact into an emotional mystery. The film pairs intimate character work with a quietly enormous idea and rewards viewers who want spectacle with substance.',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg',
    accent: '#9dd3ff',
    collections: ['Because you liked Dune', 'Award winners', 'Thoughtful sci-fi'],
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    runtime: '1h 57m',
    rating: 'PG',
    genre: ['Animation', 'Action'],
    score: 97,
    director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Mahershala Ali'],
    tagline: 'Every hero has more than one universe to save.',
    synopsis:
      'Brooklyn teen Miles Morales discovers that heroism can come from many universes, styles, and voices.',
    longDescription:
      'Bursting with comic-book energy, Spider-Verse makes every frame feel hand-crafted. It is playful, kinetic, and surprisingly heartfelt without losing the thrill of its universe-hopping premise.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png/250px-Spider-Man_Into_the_Spider-Verse_poster.png',
    accent: '#ff6b6b',
    collections: ['Family movie night', 'Crowd pleasers', 'Award winners'],
  },
  {
    id: 'knives-out',
    title: 'Knives Out',
    year: 2019,
    runtime: '2h 10m',
    rating: 'PG-13',
    genre: ['Mystery', 'Comedy'],
    score: 97,
    director: 'Rian Johnson',
    cast: ['Daniel Craig', 'Ana de Armas', 'Chris Evans'],
    tagline: 'Everyone has a motive. Somebody has better manners.',
    synopsis:
      'A master detective untangles a gleefully messy family mystery after a wealthy novelist dies under suspicious circumstances.',
    longDescription:
      'Knives Out is a precision-built whodunit that also knows exactly how funny it is. Twists land cleanly, performances are deliciously sharp, and the central mystery keeps evolving until the final beat.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Knives_Out_poster.jpeg/250px-Knives_Out_poster.jpeg',
    accent: '#f3c969',
    collections: ['Tonight’s picks', 'Mystery row', 'Award winners'],
  },
  {
    id: 'past-lives',
    title: 'Past Lives',
    year: 2023,
    runtime: '1h 46m',
    rating: 'PG-13',
    genre: ['Romance', 'Drama'],
    score: 95,
    director: 'Celine Song',
    cast: ['Greta Lee', 'Teo Yoo', 'John Magaro'],
    tagline: 'Some connections stay with you across every version of life.',
    synopsis:
      'Two childhood friends reconnect across continents and years, confronting what love becomes when timing is everything.',
    longDescription:
      'Past Lives is intimate, restrained, and emotionally devastating in the gentlest way. It explores destiny, migration, and adult longing with unusual patience and confidence.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Past_Lives_film_poster.png/250px-Past_Lives_film_poster.png',
    accent: '#c7a6ff',
    collections: ['Quiet dramas', 'Award winners', 'Late-night watch'],
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    runtime: '2h 0m',
    rating: 'R',
    genre: ['Action', 'Adventure'],
    score: 97,
    director: 'George Miller',
    cast: ['Charlize Theron', 'Tom Hardy', 'Nicholas Hoult'],
    tagline: 'The road is war, and survival is only the opening scene.',
    synopsis:
      'A relentless chase across a desert wasteland turns survival into rebellion at full speed.',
    longDescription:
      'Fury Road is pure cinematic propulsion. Practical stunts, mythic scale, and exacting visual storytelling combine into an action film that feels both brutal and strangely elegant.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Mad_Max_Fury_Road.jpg/250px-Mad_Max_Fury_Road.jpg',
    accent: '#ff9966',
    collections: ['Tonight’s picks', 'Action row', 'Because you liked Dune'],
  },
  {
    id: 'the-grand-budapest-hotel',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    runtime: '1h 39m',
    rating: 'R',
    genre: ['Comedy', 'Adventure'],
    score: 92,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan'],
    tagline: 'Check in for charm, intrigue, and immaculate pastry boxes.',
    synopsis:
      'A meticulous concierge and his protégé race through a confectionary caper involving art, inheritance, and old-world chaos.',
    longDescription:
      'Playful symmetry, deadpan humor, and melancholy nostalgia give The Grand Budapest Hotel its singular tone. It feels ornate and light on the surface while carrying real emotional texture underneath.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png',
    accent: '#f7a8c4',
    collections: ['Comfort movies', 'Award winners', 'Late-night watch'],
  },
]

export const movieCollections = [
  { id: 'tonight', title: "Tonight's Picks", match: 'Tonight’s picks' },
  { id: 'awards', title: 'Award Winners', match: 'Award winners' },
  { id: 'mood', title: 'Late-Night Watch', match: 'Late-night watch' },
]

export function getMovieById(id) {
  return movies.find((movie) => movie.id === id)
}

export function getMoviesForCollection(collectionMatch) {
  return movies.filter((movie) => movie.collections.includes(collectionMatch))
}
