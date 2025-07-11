const contents=document.createElement("div");
const title=document.createElement("h1");
title.textContent="Welcome to my restaurant!";
const para=document.createElement("p");
para.textContent="this is my super awesome restaurant";
contents.appendChild(title);
contents.appendChild(para);

const display=document.querySelector("#content");
const swapHome= () => {
    display.appendChild(contents);
}
export {contents, swapHome};