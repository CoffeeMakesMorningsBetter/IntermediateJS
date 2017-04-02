function createMovieDiv(movie) {
  var textTitle = movie.Title
  var div = document.createElement('div')
  var text = document.createTextNode(textTitle)
  div.appendChild(text)
  return div;
}

function createMovieImg(movie){
  var poster = movie.Poster
  var img = document.createElement('img')
  img.src = poster;
  img.alt = "this is my alt text"
  return img;
}

function appendAll(movieData) {
  var getMovies = document.getElementById('movies');
  movieData.forEach(function(m) {
    getMovies.append(createMovieDiv(m));
    getMovies.append(createMovieImg(m));
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  appendAll(movieData);
});
