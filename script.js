let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((data1) => {
      quote.innerText = data1.content;
      author.innerText = data1.author;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
