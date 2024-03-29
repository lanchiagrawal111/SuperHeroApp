// thus function is calling when any button is clicked in search box
function myFunction() {

    var inputHero = document.getElementById("inputHero").value;

    // Sending XML Request for fetching the names of superheroes
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://superheroapi.com/api.php/1763579630450901/search/" + inputHero);
    xhr.send();
    xhr.onload = function () {
        let parse = JSON.parse(xhr.response);
        document.getElementById("search-list").innerHTML = "";
        for (let i = 0; i < parse.results.length; i++) {
            let div1 = document.createElement("div");
            div1.setAttribute("class", "favourite");
            div1.setAttribute("onclick", "favouriteClick(" + parse.results[i].id + ")");
            let image = document.createElement("img");
            image.setAttribute("src", "https://icon-library.com/images/favorites-icon/favorites-icon-10.jpg");
            div1.appendChild(image);
            let a = document.createElement("a");
            a.setAttribute("href", "profile.html");
            a.setAttribute("onclick", "profile(" + parse.results[i].id + ")");
            a.innerHTML = parse.results[i].name; 
            let singleList = document.createElement("div");
            singleList.setAttribute("class", "singleList");
            singleList.appendChild(a);
            singleList.appendChild(div1);
            document.getElementById("search-list").appendChild(singleList);
            // document.getElementById("search-list").appendChild(div1);

        }

    }

}

//This function is calling when someone clicks on the name of superheroes from search results
function profile(id) {
    localStorage.setItem("superheroId", id);
    console.log(id);
}

function favouriteClick(id) {
    if (localStorage.getItem(id) == null) {
        var r = confirm("Add SuperHero!");
        if (r == true) {
            localStorage.setItem(id, id);
            console.log("add");
        }

    }
    else {
        var r = confirm("Remove Superhero!");
        if (r == true) {
            localStorage.removeItem(id);
            console.log("remove");
        }

    }

}