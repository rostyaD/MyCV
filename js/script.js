// i didn't knew what should i use js for, so i'll just add some element, that  isn't really required, just to show, that i know some basic js
let x = document.querySelector('#thisA');
x.addEventListener("load", changeText);
function changeText () {
    x = document.querySelector('#thisA').innerText = "DOWNLOAD";
}