//Recuperiamo dal DOM quello che ci serve e 
//salviamolo in una variabile

//Paragrafo da mostrare
const paragraphFirst = document.getElementById("paraShow");

//Immagine da sostituire
const imgPlus = document.getElementById("pShow");

//Recupero anche il div
const paragrafoTitle = document.getElementById("paraTitle")

//Creiamo una funzione che possa aprire il paragrafo 
paragrafoTitle.addEventListener ("click", () => {
    if (paragraphFirst.style.display === "none") {
    imgPlus.src = "../img/icon-minus.svg";
    paragraphFirst.style.display = "block";
    }
    else {
    paragraphFirst.style.display = "none";
    imgPlus.src = "../img/icon-plus.svg";
    }
});

   
