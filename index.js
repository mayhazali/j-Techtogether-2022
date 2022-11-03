var  hydrationImage;
var plasticImage; 
var whyImage;
var homeImage;

const hydrationList = document.getElementsByClassName("hydration");
hydrationImage = hydrationList[0];
hydrationImage.addEventListener("click", myFunction);

function myFunction() {
    location.href = "./hydration.html";
    console.log("Hi");
 
}

const plasticList = document.getElementsByClassName("plastic");
plasticImage = plasticList[0];
plasticImage.addEventListener("click", wyFunction);

function wyFunction() { 
    location.href = "./plastic.html";
    console.log("bye");
}

const homeList = document.getElementsByClassName("home");
homeImage = homeList[0];
homeImage.addEventListener("click", ymFunction);

function ymFunction() {
    location.href = "./index.html";
    console.log("hm");
}


