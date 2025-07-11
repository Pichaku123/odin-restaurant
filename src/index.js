import { contents as home, swapHome } from "./home"; 
import { contents as menu, swapMenu } from "./menu";
import { contents as about, swapAbout }from "./about";

const display=document.querySelector("#content");
const homeButton=document.querySelector("#home");
const menuButton=document.querySelector("#menu");
const aboutButton=document.querySelector("#about");

homeButton.addEventListener("click", () => {
    display.innerHTML="";
    swapHome();
});

menuButton.addEventListener("click", () => {
    display.innerHTML="";
    swapMenu();
});

aboutButton.addEventListener("click", () => {
    display.innerHTML="";
    swapAbout();
});


console.log("hi");
alert("file running fine");