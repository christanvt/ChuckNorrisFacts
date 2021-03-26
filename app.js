"use strict";

const punchlines = [
  "Un jour, deux individus se sont introduits dans le jardin de Chuck Norris. Depuis, on n'a plus de nouvelles d'Adam et Ève.",
  "Hulk s'est battu contre Chuck Norris une fois.Depuis, il fait de la pub pour du maïs.",
  "C'est Chuck Norris lui même qui a signé un autographe sur le front d'Harry Potter.",
  "Chuck Norris a déjà fait pleurer la Vache Qui Rit.",
  "Chuck Norris à déjà mis enceinte une poupée gonflable. Ainsi est née Chucky, la poupée qui tue.",
  "Avant d'aller à l'école, Chuck Norris déposait ses parents au travail.",
  "Chuck Norris. What else?",
  "Chuck Norris a cassé sa première dent en mangeant la petite souris.",
  "La seule raison pour laquelle Dieu créa les hommes, c'est pour que Chuck Norris se défoule sur quelqu'un d'autre.",
  "Chuck Norris peut pénétrer les voies du seigneur.",
  "Les laxatifs sont sans effets sur Chuck Norris, on ne fait pas chier Chuck Norris.",
  "Chuck Norris utilise un viaduc comme planche à repasser.",
  "C'est Monsieur Propre en personne qui nettoie la maison de Chuck Norris",
  "Chuck Norris peut comprendre un film de David Lynch.",
  "Un jour, un mec a téléchargé illégalement Delta Force sur Megaupload, c'est pour ça qu'il a été fermé.",
  "Chuck Norris peut faire un copier-coller sur une machine à écrire.",
  "Chuck Norris peut jouer à Candy Crush sur un téléphone fixe.",
];

const btn = document.querySelector("#next");
btn.addEventListener("click", work);
const texte = document.querySelector("#facts");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function work() {
  let i = getRandomInt(0, 16);
  texte.textContent = punchlines[i];

  let rgb1 = getRandomInt(0, 150);
  let rgb2 = getRandomInt(0, 150);
  let rgb3 = getRandomInt(0, 150);

  document.querySelector("body").style.backgroundColor =
    "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
  document.querySelector("#facts").style.color =
    "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
  document.querySelector("#next").style.backgroundColor =
    "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
}
