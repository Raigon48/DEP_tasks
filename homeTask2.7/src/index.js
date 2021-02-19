import './main.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

let searchButton = document.getElementById("news-button");
function display() {
    import('./app/displayNews').then(({displayLatestNews}) => {
        displayLatestNews();
    } )
}
searchButton.addEventListener("click", display);
