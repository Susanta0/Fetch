let userContainer = document.getElementById("userContainer");

function userDisplay(userData) {
  userContainer.innerHTML = "";

  userData.forEach(function (el) {
    let contentBox = document.createElement("div");
    contentBox.className = "userBox";
    //create image tag which is disply images
    let images = document.createElement("img");
    images.src = el.avatar;
    // create a p tag which is display first name
    let firstName = document.createElement("p");
    firstName.textContent = `First Name :- ${el.first_name}`;
    // create a p tag which is display last name
    let lastName = document.createElement("p");
    lastName.textContent = `Last Name :- ${el.last_name}`;
    // create a p tag which is display email
    let userEmail = document.createElement("p");
    userEmail.textContent = `Email id :- ${el.email}`;

    contentBox.append(images, firstName, lastName, userEmail);
    userContainer.append(contentBox);
  });
}
let backHome = document.getElementById("home");
backHome.addEventListener("click", function () {
  userContainer.style.display = "none";
  backHome.style.display = "none";
});
function dataFalse() {
  userContainer.innerHTML = "";
  userContainer.textContent = "Something went wrong";
}

let fetchUser = document.getElementById("fetch");
fetchUser.addEventListener("click", function (event) {
  event.preventDefault();
  userContainer.style.display = "grid";
  backHome.style.display = "block";

  fetch("https://reqres.in/api/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (finalResult) {
      userDisplay(finalResult.data);
    })
    .catch(function (error) {
      console.log(error);
      dataFalse();
    });
});
