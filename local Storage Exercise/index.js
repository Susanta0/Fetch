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

let form2 = document.getElementById("userDetailsContainer");
let showName = document.getElementById("showName");
let showAge = document.getElementById("showAge");
form2.addEventListener("click",function(event){
    event.preventDefault()
    let userDetails ={
        name :Name.value,
        age:age.value
    }
    let savdDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(userDetails.name === savdDetails.name && userDetails.age === savdDetails.age){
        showName.nextElementSibling.textContent = savdDetails.name;
        showAge.nextElementSibling.textContent = savdDetails.age;
    }
})