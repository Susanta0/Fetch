let form = document.getElementById("from-container");
let Name = document.getElementById("name");
let age = document.getElementById("age");
form.addEventListener("submit",function(event){
    event.preventDefault()
    let userDetails={
        name:Name.value,
        age:age.value
    }
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
})

let form2 = document.getElementById("show");
let showName = document.getElementById("showName");
let showAge = document.getElementById("showAge");
form2.addEventListener("click",function(event){
    event.preventDefault()
    let savdDetails = JSON.parse(localStorage.getItem("userDetails"));
    showName.textContent = `Name : ${savdDetails.name}`;
    showAge.textContent = `Age : ${savdDetails.age}`;
})
