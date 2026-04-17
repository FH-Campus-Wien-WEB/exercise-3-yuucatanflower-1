import { ElementBuilder, ParentChildBuilder } from "./builders.js";

class ParagraphBuilder extends ParentChildBuilder {
  constructor() {
    super("p", "span");
  }
}

class ListBuilder extends ParentChildBuilder {
  constructor() {
    super("ul", "li");
  }
}

function formatRuntime(runtime) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h " + minutes + "m";
}

function appendMovie(movie, element) {
  // 1.Left Sidebar (Poster + Ratings)
  const sidebar = new ElementBuilder("div").with("class", "poster-sidebar")
      .append(new ElementBuilder("img").with("src", movie.Poster))
      .append(new ElementBuilder("div").with("class", "ratings-container")
          .append(new ElementBuilder("div").with("class", "rating-box")
              .append(new ElementBuilder("span").with("class", "rating-label").text("Metascore"))
              .append(new ElementBuilder("span").with("class", "rating-score").text(movie.Metascore)))
          .append(new ElementBuilder("div").with("class", "rating-box")
              .append(new ElementBuilder("span").with("class", "rating-label").text("IMDb"))
              .append(new ElementBuilder("span").with("class", "rating-score").text(movie.imdbRating))));

  // 2. Right Content Area (Text + Buttons)
  const content = new ElementBuilder("div").with("class", "movie-content")
      .append(new ElementBuilder("h1").text(movie.Title))
      .append(new ElementBuilder("p")
          .append(new ElementBuilder("button").text("Edit")
              .listener("click", () => location.href = "edit.html?imdbID=" + movie.imdbID)))
      .append(new ParagraphBuilder().items(
          "Runtime " + formatRuntime(movie.Runtime),
          "\u2022",
          "Released on " +
          new Date(movie.Released).toLocaleDateString("en-US")))
      .append(new ParagraphBuilder().childClass("genre").items(movie.Genres))
      .append(new ElementBuilder("p").text(movie.Plot))
      .append(new ElementBuilder("h2").pluralizedText("Director", movie.Directors))
      .append(new ListBuilder().items(movie.Directors))
      .append(new ElementBuilder("h2").pluralizedText("Writer", movie.Writers))
      .append(new ListBuilder().items(movie.Writers))
      .append(new ElementBuilder("h2").pluralizedText("Actor", movie.Actors))
      .append(new ListBuilder().items(movie.Actors));

  // 3. Append both to the main article
  new ElementBuilder("article").id(movie.imdbID)
      .append(sidebar)
      .append(content)
      .appendTo(element);
}

function loadMovies(genre) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const mainElement = document.querySelector("main");

    while (mainElement.childElementCount > 0) {
      mainElement.firstChild.remove()
    }

    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText)
      for (const movie of movies) {
        appendMovie(movie, mainElement)
      }
    } else {
      mainElement.append(`Data could not be loaded, Status ${xhr.status} - ${xhr.statusText}`);
    }
  }

  const url = new URL("/movies", location.href)

  /* Task 1.4 / 2.2. Add query parameter to the url if a genre is given */
  if (genre) {
    url.searchParams.set("genre", genre);
  }

  xhr.open("GET", url)
  xhr.send()
}

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const navElement = document.querySelector("nav");

    if (xhr.status === 200) {
      const genres = JSON.parse(xhr.responseText);

      /* Task 1.3. Add the genre buttons */

      //the "All movies" button
      const allButton = document.createElement("button");
      allButton.textContent = "All movies";
      // passing undefined or empty string loads all movies
      allButton.addEventListener("click", () => loadMovies(""));
      navElement.appendChild(allButton);

      // loop through genres and create a button for each
      for (const genre of genres) {
        const btn = document.createElement("button");
        btn.textContent = genre;
        btn.addEventListener("click", () => loadMovies(genre));
        navElement.appendChild(btn);
      }

      /* when a first button exists, we click it to load all movies. */
      const firstButton = document.querySelector("nav button");
      if (firstButton) {
        firstButton.click();
      }
    } else {
      document.querySelector("body").append(`Could not load data, Status ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.open("GET", "/genres");
  xhr.send();
};