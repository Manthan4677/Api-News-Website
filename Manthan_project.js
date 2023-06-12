const result = fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cd368982225b4f469fe3bbb06ef5c0e2").then(function(response) {
    return response.json();
}) .then(
    function(data) {
        displayNews(data); // Function To Display Data
    }
);

function displayNews(data) {
    for(let i =0; i < data.articles.length ; i++) {
        createCard(data.articles[i]);
    }
}

function createCard(data) {
    let marquee = document.querySelector('marquee');
    marquee.innerHTML += (article.title).toUppercase() + "  ||  ";


let card = document.createElement("div");
card.classList.add("card");

let image = document.createElement("img");
image.classList.add("image");
image.src = article.urlTOimage;

let cardContent = document.createElement("div");
cardContent.classList.add("card-content");

let title = document.createElement("span");
title.textContent = article.title;

let description = document.createElement("p");
let root =document.querySelector(":root");
let rootCss = getComputedStyle(root);

let trunc = rootCss.getPropertyValue('--setTrunc');

description.textContent = article.description;

if (trunc ==1) {
    description.textContent = description.textContent.substring(0,50);
}
description.textContent = des
}
