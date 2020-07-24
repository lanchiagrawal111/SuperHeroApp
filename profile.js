//getting id of clicked superhero
var id = localStorage.getItem("superheroId");

//ap request for image of superhero
let xhrImage = new XMLHttpRequest();
xhrImage.open("GET", "https://superheroapi.com/api.php/1763579630450901/" + id + "/image");
xhrImage.send();
xhrImage.onload = function () {
    let parse = JSON.parse(xhrImage.response);
    let img = document.createElement("img");
    img.setAttribute("src", parse.url);
    document.getElementById("profile-image").appendChild(img);
}

//api request for name and bio of superhero
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://superheroapi.com/api.php/1763579630450901/" + id);
xhr.send();
xhr.onload = function () {
    let parse = JSON.parse(xhr.response);
    let div1 = document.createElement("div");
    div1.innerHTML = parse.name;
    let div2 = document.createElement("div");
    div2.innerHTML = parse.biography["full-name"];
    let div3 = document.createElement("div");
    div3.innerHTML = parse.biography["place-of-birth"];
    let div4 = document.createElement("div");
    div4.innerHTML = parse.biography["alter-egos"];
    let div5 = document.createElement("div");
    div5.innerHTML = parse.biography.publisher;
    let div6 = document.createElement("div");
    div6.innerHTML = parse.biography.alignment;
    document.getElementById("heroes-name").appendChild(div1);
    document.getElementById("heroes-full-name").appendChild(div2);
    document.getElementById("place-of-birth").appendChild(div3);
    document.getElementById("alter-egos").appendChild(div4);
    document.getElementById("publisher").appendChild(div5);
    document.getElementById("alignment").appendChild(div6);

}

//API request for powerstas of superheroes
let xhrpowerstat = new XMLHttpRequest();
xhrpowerstat.open("GET", "https://superheroapi.com/api.php/1763579630450901/" + id + "/powerstats");
xhrpowerstat.send();
xhrpowerstat.onload = function () {
    let parse = JSON.parse(xhrpowerstat.response);
    let div1 = document.createElement("div");
    div1.innerHTML = parse.intelligence;
    let div2 = document.createElement("div");
    div2.innerHTML = parse.strength;
    let div3 = document.createElement("div");
    div3.innerHTML = parse.speed;
    let div4 = document.createElement("div");
    div4.innerHTML = parse.durability;
    let div5 = document.createElement("div");
    div5.innerHTML = parse.power;
    let div6 = document.createElement("div");
    div6.innerHTML = parse.combat;
    document.getElementById("intelligence").appendChild(div1);
    document.getElementById("strength").appendChild(div2);
    document.getElementById("speed").appendChild(div3);
    document.getElementById("durability").appendChild(div4);
    document.getElementById("power").appendChild(div5);
    document.getElementById("combat").appendChild(div6);
}
