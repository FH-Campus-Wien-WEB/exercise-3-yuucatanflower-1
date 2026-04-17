/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
  "tt0253474": {
    "imdbID": "tt0253474",
    "Title": "The Pianist",
    "Released": "2003-01-03",
    "Runtime": 150,
    "Genres": ["Biography", "Drama", "Music"],
    "Directors": ["Roman Polanski"],
    "Writers": ["Ronald Harwood", "Wladyslaw Szpilman"],
    "Actors": ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
    "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Metascore": 85,
    "imdbRating": 8.5
  },
  "tt1210166": {
    "imdbID": "tt1210166",
    "Title": "Moneyball",
    "Released": "2011-09-23",
    "Runtime": 133,
    "Genres": ["Biography", "Drama", "Sports"],
    "Directors": ["Bennett Miller"],
    "Writers": ["Steven Zaillian", "Aaron Sorkin", "Stan Chervin"],
    "Actors": ["Brad Pitt", "Robin Wright", "Jonah Hill"],
    "Plot": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
    "Metascore": 87,
    "imdbRating": 7.6
  },
  "tt0109830": {
    "imdbID": "tt0109830",
    "Title": "Forrest Gump",
    "Released": "1994-07-06",
    "Runtime": 142,
    "Genres": ["Drama", "Romance"],
    "Directors": ["Robert Zemeckis"],
    "Writers": ["Winston Groom", "Eric Roth"],
    "Actors": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 82,
    "imdbRating": 8.8
  },
  "tt0141842": {
    "imdbID": "tt0141842",
    "Title": "The Sopranos",
    "Released": "1999-01-10",
    "Runtime": 55,
    "Genres": ["Crime", "Drama"],
    "Directors": ["David Chase"],
    "Writers": ["David Chase"],
    "Actors": ["James Gandolfini", "Lorraine Bracco", "Edie Falco"],
    "Plot": "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Metascore": 97,
    "imdbRating": 9.2
  },
  "tt0133093": {
    "imdbID": "tt0133093",
    "Title": "The Matrix",
    "Released": "1999-03-31",
    "Runtime": 136,
    "Genres": ["Action", "Sci-Fi"],
    "Directors": ["Lana Wachowski", "Lilly Wachowski"],
    "Writers": ["Lana Wachowski", "Lilly Wachowski"],
    "Actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Metascore": 73,
    "imdbRating": 8.7
  },
  "tt0816692": {
    "imdbID": "tt0816692",
    "Title": "Interstellar",
    "Released": "2014-11-07",
    "Runtime": 169,
    "Genres": ["Adventure", "Drama", "Sci-Fi"],
    "Directors": ["Christopher Nolan"],
    "Writers": ["Jonathan Nolan", "Christopher Nolan"],
    "Actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Metascore": 74,
    "imdbRating": 8.6
  }
};

module.exports = movies;