const contents=document.createElement("div");
const title=document.createElement("h1");
title.textContent="This is our menu!";
const para=document.createElement("p");
para.textContent="items here";
contents.appendChild(title);
contents.appendChild(para);

const display=document.querySelector("#content");
const swapMenu= () => {
    display.appendChild(contents);
}
export {contents, swapMenu};