console.log(localStorage);

for (let i in localStorage) {
    if (i >= 1 && i <= 735) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://superheroapi.com/api.php/1763579630450901/" + i);
        xhr.send();
        xhr.onload = function () {
            let parse = JSON.parse(xhr.response);
            let div = document.createElement("div");
            div.setAttribute("class", "myDiv");
            div.innerHTML = parse.name;
            document.getElementById("favourite").appendChild(div);
            console.log(parse.name);
        }
    }

}