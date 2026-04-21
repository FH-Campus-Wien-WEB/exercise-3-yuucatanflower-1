const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js'); //data is imported as 'movieModel'

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));


/* Task 1.2: Add a GET /genres endpoint:
   This endpoint returns a sorted array of all the genres of the movies
   that are currently in the movie model.
*/
app.get('/genres', function (req, res) {
  const allMovies = Object.values(movieModel);
  const uniqueGenres = new Set();

  // loop through all movies and add their genres to the set
  allMovies.forEach(movie => {
    if (movie.Genres && Array.isArray(movie.Genres)) {
      movie.Genres.forEach(genre => uniqueGenres.add(genre));
    }
  });

  // convert the set back to an array and sort it alphabetically
  const sortedGenres = Array.from(uniqueGenres).sort();
  res.json(sortedGenres);
});


/* Task 1.4 & 2.2: Extend the GET /movies endpoint:
   When a query parameter for a specific genre is given,
   return only movies that have the given genre.
 */
app.get('/movies', function (req, res) {
  let moviesArray = Object.values(movieModel);

  // Check if a '?genre=' query parameter was sent by the client
  if (req.query.genre) {
    const targetGenre = req.query.genre;
    // Filter the array to only include movies that have this genre
    moviesArray = moviesArray.filter(movie =>
        movie.Genres && movie.Genres.includes(targetGenre)
    );
  }

  res.send(moviesArray);
});


// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const exists = id in movieModel;

  if (exists) {
    res.send(movieModel[id]);
  } else {
    res.sendStatus(404);
  }
});


// Endpoint to update or create a movie
app.put('/movies/:imdbID', function(req, res) {
  const id = req.params.imdbID;
  const exists = id in movieModel;

  movieModel[req.params.imdbID] = req.body;

  if (!exists) {
    res.status(201).send(req.body); // 201 Created
  } else {
    res.sendStatus(200); // 200 OK
  }
});


app.listen(3000, () => {
  console.log("Server now listening on http://localhost:3000/");
});