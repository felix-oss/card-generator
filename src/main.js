/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.randomCard = function randomCard() {
  var symbol = Math.floor(Math.random() * 4);
  if (symbol == 0) {
    document.querySelector(".top-left").innerHTML = "&#9830;";
  }
  if (symbol == 1) {
    document.querySelector(".top-left").innerHTML = "&#9829;";
  }
  if (symbol == 2) {
    document.querySelector(".top-left").innerHTML = "&#9827;";
  }
  if (symbol == 3) {
    document.querySelector(".top-left").innerHTML = "&#9824;";
  }
  if (symbol == 0) {
    document.querySelector(".bottom-right").innerHTML = "&#9830;";
  }
  if (symbol == 1) {
    document.querySelector(".bottom-right").innerHTML = "&#9829;";
  }
  if (symbol == 2) {
    document.querySelector(".bottom-right").innerHTML = "&#9827;";
  }
  if (symbol == 3) {
    document.querySelector(".bottom-right").innerHTML = "&#9824;";
  }
  // numbers -------------->
  var numb = Math.floor(Math.random() * 13);
  if (numb == 0) {
    document.querySelector(".card-center-2").innerHTML = "A";
  }
  if (numb == 1) {
    document.querySelector(".card-center-2").innerHTML = "2";
  }
  if (numb == 2) {
    document.querySelector(".card-center-2").innerHTML = "3";
  }
  if (numb == 3) {
    document.querySelector(".card-center-2").innerHTML = "4";
  }
  if (numb == 4) {
    document.querySelector(".card-center-2").innerHTML = "5";
  }
  if (numb == 5) {
    document.querySelector(".card-center-2").innerHTML = "6";
  }
  if (numb == 6) {
    document.querySelector(".card-center-2").innerHTML = "7";
  }
  if (numb == 7) {
    document.querySelector(".card-center-2").innerHTML = "8";
  }
  if (numb == 8) {
    document.querySelector(".card-center-2").innerHTML = "9";
  }
  if (numb == 9) {
    document.querySelector(".card-center-2").innerHTML = "10";
  }
  if (numb == 10) {
    document.querySelector(".card-center-2").innerHTML = "J";
  }
  if (numb == 11) {
    document.querySelector(".card-center-2").innerHTML = "Q";
  }
  if (numb == 12) {
    document.querySelector(".card-center-2").innerHTML = "K";
  }
  var colr = document.querySelector(".card1");
  colr.classList.contains("text-danger") && colr.classList.toggle("text-dark");
};
