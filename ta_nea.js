/*
By pass the subscription demand, blocking content
It is rediculusly easy, actually
*/

let blocker = document.querySelector(".retricted-content");
let content = document.querySelector(".main-content .main-section");

blocker.remove()
content.style.display = "block"
