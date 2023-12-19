let Api_Key = "b9ce6467";
let allCard = document.getElementsByClassName("container2")[0];

let Search_button = document.getElementById("search_button");
Search_button.addEventListener("click", function (event) {
  event.preventDefault();
  let SearchInput = document.getElementById("search").value;
  fetch(`http://www.omdbapi.com/?apikey=${Api_Key}&s=${SearchInput}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (finalResponse) {
      console.log(finalResponse);
      movieDisplay(finalResponse.Search);
    })
    .catch(function (err) {
      console.log(err);
    });
});

function movieDisplay(movieList) {
  allCard.innerHTML = "";
  if (!movieList || movieList.length === 0) {
    allCard.textContent = "No Results Found";
  } else {
    movieList.forEach((movieCard) => {
      let card = document.createElement("div");
      card.className = "cardBox";
      // movie image
      let movieImage = document.createElement("img");
      movieImage.src = movieCard.Poster;
      // movie title
      let movieTitle = document.createElement("p");
      movieTitle.textContent = `Title : ${movieCard.Title}`;
      // create year
      let movieYear = document.createElement("p");
      movieYear.textContent = `Year : ${movieCard.Year}`;
      // Create IMDB ID;
      let movieId = document.createElement("p");
      movieId.textContent = `IMDB-ID : ${movieCard.imdbID}`;
      // type
      let movieType = document.createElement("p");
      movieType.textContent = `Type : ${movieCard.Type}`;

      // append all data
      card.append(movieImage, movieTitle, movieYear, movieId, movieType);
      card.addEventListener("click", function () {
        localStorage.setItem("imdbID", movieCard.imdbID);
        location.href = "movieCardBox.html";
      });

      allCard.append(card);
    });
  }
}
