const contents=document.createElement("div");
const title=document.createElement("h1");
title.textContent="About us-";
const para=document.createElement("p");
para.textContent="<insert my phone no. here>";
contents.appendChild(title);
contents.appendChild(para);

const display=document.querySelector("#content");
const swapAbout= () => {
    display.appendChild(contents);
}
export {contents, swapAbout};