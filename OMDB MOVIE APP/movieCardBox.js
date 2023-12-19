let singelCardBox = document.getElementsByClassName("container3")[0];
let Api_Key = "b9ce6467";
let backHome = document.getElementById("backHome");
backHome.addEventListener("click", function () {
  location.href = "index.html";
});

function call() {
  let imdbID = localStorage.getItem("imdbID");
  // get data
  fetch(`http://www.omdbapi.com/?apikey=${Api_Key}&i=${imdbID}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response);
      displaySingelData(response);
    });

  if (imdbID) {
  } else {
    singelCardBox.innerHTML = "";
    singelCardBox.textContent = "IMDB ID Invalid";
  }
}

function displaySingelData(singelMovieContent) {
  // card box1
  let singelBox = document.createElement("div");
  singelBox.className = "container3Mini";

  // card box2
  let about = document.createElement("div");
  about.className = "About";
  let h2 = document.createElement("h2");
  h2.textContent = "Movie Details";
  about.append(h2);

  // card box3
  let worldWide = document.createElement("div");
  worldWide.className = "wroldWide";
  let nexth2 = document.createElement("h2");
  nexth2.textContent = "Worldwide Income & Awards";
  worldWide.append(nexth2);

  // card box4
  let reviews = document.createElement("div");
  reviews.className = "reviews";
  let thardh2 = document.createElement("h2");
  thardh2.textContent = "Reviews & Votes";
  reviews.append(thardh2);

  // card others
  let others = document.createElement("div");
  others.className = "others";
  let fourthh2 = document.createElement("h2");
  fourthh2.textContent = "Other";
  others.append(fourthh2);

  // movie image
  let singelMovieImage = document.createElement("img");
  singelMovieImage.src = singelMovieContent.Poster;
  // movie title
  let singelMovieTitle = document.createElement("p");
  singelMovieTitle.textContent = `Title : ${singelMovieContent.Title}`;
  // movie year
  let singelMovieYear = document.createElement("p");
  singelMovieYear.textContent = `Year : ${singelMovieContent.Year}`;
  // movie rating
  let singelMovieRate = document.createElement("p");
  singelMovieRate.textContent = `Rated : ${singelMovieContent.Rated}`;
  // movie released
  let singelMovieReleased = document.createElement("p");
  singelMovieReleased.textContent = `Released : ${singelMovieContent.Released}`;
  // movie runtime
  let singelMovieRuntime = document.createElement("p");
  singelMovieRuntime.textContent = `Time : ${singelMovieContent.Runtime}`;
  // movie genre
  let singelMovieGenre = document.createElement("p");
  singelMovieGenre.textContent = `Genre : ${singelMovieContent.Genre}`;
  // movie director
  let singelMovieDirector = document.createElement("p");
  singelMovieDirector.textContent = `Director : ${singelMovieContent.Director}`;
  // movie writer
  let singelMovieWriter = document.createElement("p");
  singelMovieWriter.textContent = `Writer : ${singelMovieContent.Writer}`;
  // movie plot
  let singelMoviePlot = document.createElement("p");
  singelMoviePlot.textContent = `Plot : ${singelMovieContent.Plot}`;
  // movie language
  let singelMovieLanguage = document.createElement("p");
  singelMovieLanguage.textContent = `Language : ${singelMovieContent.Language}`;
  // movie country
  let singelMovieCountry = document.createElement("p");
  singelMovieCountry.textContent = `Country : ${singelMovieContent.Country}`;
  // movie Awards
  let singelMovieAwards = document.createElement("p");
  singelMovieAwards.textContent = `Awards : ${singelMovieContent.Awards}`;
  // movie metascore
  let singelMovieMetascore = document.createElement("p");
  singelMovieMetascore.textContent = `Metascore : ${singelMovieContent.Metascore}`;
  // movie imdbrating
  let singelMovieImd = document.createElement("p");
  singelMovieImd.textContent = `IMDB Rating : ${singelMovieContent.imdbRating}`;
  // movie vote
  let singelMovieVotes = document.createElement("p");
  singelMovieVotes.textContent = `IMDB Votes : ${singelMovieContent.imdbVotes}`;
  // movie type
  let singelMovieType = document.createElement("p");
  singelMovieType.textContent = `Type : ${singelMovieContent.Type}`;
  // movie DVD
  let singelMovieDvd = document.createElement("p");
  singelMovieDvd.textContent = `DVD : ${singelMovieContent.DVD}`;
  // movie boxOffice
  let singelMovieBoxOffice = document.createElement("p");
  singelMovieBoxOffice.textContent = `Box Office : ${singelMovieContent.BoxOffice}`;
  // movie production
  let singelMovieProduction = document.createElement("p");
  singelMovieProduction.textContent = `Production : ${singelMovieContent.Production}`;
  // movie website
  let singelMovieWebsite = document.createElement("p");
  singelMovieWebsite.textContent = `Website : ${singelMovieContent.Website}`;
  // movie response
  let singelMovieResponse = document.createElement("p");
  singelMovieResponse.textContent = `Response : ${singelMovieContent.Response}`;
  // append all data
  singelBox.append(
    singelMovieImage,
    singelMovieTitle,
    singelMovieYear,
    singelMovieReleased,
    singelMovieRuntime,
    singelMovieLanguage,
    singelMovieCountry
  );
  about.append(
    singelMoviePlot,
    singelMovieDirector,
    singelMovieWriter,
    singelMovieGenre
  );
  worldWide.append(
    singelMovieBoxOffice,
    singelMovieAwards,
    singelMovieProduction,
    singelMovieResponse
  );
  reviews.append(singelMovieVotes, singelMovieRate, singelMovieType);
  others.append(
    singelMovieImd,
    singelMovieMetascore,
    singelMovieWebsite,
    singelMovieDvd
  );

  // poster button
  let about_button = document.createElement("button");
  about_button.className = "AboutButton";
  about_button.textContent = "Poster";
  singelCardBox.append(about_button);
  about_button.addEventListener("click", function (even) {
    even.preventDefault();
    about.style.display = "none";
    worldWide.style.display = "none";
    reviews.style.display = "none";
    others.style.display = "none";
    singelBox.style.display = "flex";
    singelBox.style.margin = "20px auto;";
    about_button2.style.backgroundColor = "mediumslateblue";
    about_button3.style.backgroundColor = "mediumslateblue";
    about_button4.style.backgroundColor = "mediumslateblue";
    about_button5.style.backgroundColor = "mediumslateblue";
    about_button.style.backgroundColor = "#f48c06";
  });
  // About button

  let about_button2 = document.createElement("button");
  about_button2.className = "AboutButton2";
  about_button2.textContent = "About";
  singelCardBox.append(about_button2);
  about_button2.addEventListener("click", function () {
    singelBox.style.display = "none";
    worldWide.style.display = "none";
    reviews.style.display = "none";
    others.style.display = "none";
    about.style.display = "block";
    about_button2.style.backgroundColor = "#f48c06";
    about_button.style.backgroundColor = "mediumslateblue";
    about_button3.style.backgroundColor = "mediumslateblue";
    about_button4.style.backgroundColor = "mediumslateblue";
    about_button5.style.backgroundColor = "mediumslateblue";
  });

  // World Wide button

  let about_button3 = document.createElement("button");
  about_button3.className = "AboutButton3";
  about_button3.textContent = "World wide";
  singelCardBox.append(about_button3);
  about_button3.addEventListener("click", function () {
    about.style.display = "none";
    singelBox.style.display = "none";
    reviews.style.display = "none";
    others.style.display = "none";
    worldWide.style.display = "block";
    about_button4.style.backgroundColor = "mediumslateblue";
    about_button5.style.backgroundColor = "mediumslateblue";
    about_button2.style.backgroundColor = "mediumslateblue";
    about_button.style.backgroundColor = "mediumslateblue";
    about_button3.style.backgroundColor = "#f48c06";
  });
  // Reviews button

  let about_button4 = document.createElement("button");
  about_button4.className = "AboutButton4";
  about_button4.textContent = "Reviews";
  singelCardBox.append(about_button4);
  about_button4.addEventListener("click", function () {
    about.style.display = "none";
    singelBox.style.display = "none";
    worldWide.style.display = "none";
    others.style.display = "none";
    reviews.style.display = "block";
    about_button5.style.backgroundColor = "mediumslateblue";
    about_button2.style.backgroundColor = "mediumslateblue";
    about_button.style.backgroundColor = "mediumslateblue";
    about_button3.style.backgroundColor = "mediumslateblue";
    about_button4.style.backgroundColor = "#f48c06";
  });
  // Others button

  let about_button5 = document.createElement("button");
  about_button5.className = "AboutButton5";
  about_button5.textContent = "Others";
  singelCardBox.append(about_button5);
  about_button5.addEventListener("click", function () {
    about.style.display = "none";
    singelBox.style.display = "none";
    worldWide.style.display = "none";
    reviews.style.display = "none";
    others.style.display = "block";
    about_button2.style.backgroundColor = "mediumslateblue";
    about_button.style.backgroundColor = "mediumslateblue";
    about_button3.style.backgroundColor = "mediumslateblue";
    about_button4.style.backgroundColor = "mediumslateblue";
    about_button5.style.backgroundColor = "#f48c06";
  });
  // append all button main container
  let maincontainer = document.createElement("div");
  maincontainer.className = "main";
  maincontainer.append(
    about_button,
    about_button2,
    about_button3,
    about_button4,
    about_button5
  );
  singelCardBox.append(maincontainer);

  singelCardBox.append(
    maincontainer,
    singelBox,
    about,
    worldWide,
    reviews,
    others
  );
}
call();
