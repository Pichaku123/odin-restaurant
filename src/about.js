const contents=document.createElement("div");
const title=document.createElement("h1");
title.innerHTML="About us-<br>";

const first=document.createElement("h3");
first.textContent="The Heart of Liyue Cuisine";

const para=document.createElement("p");
para.innerHTML=`Wanmin Restaurant is a restaurant run by Chef Mao, and his daughter, the head chef, Xiangling.<br>
Through Xiangling’s relentless experimentation and love for bold flavors, it has become a culinary landmark in Liyue.<br>
We blend traditional recipes with creative flair — no fear of fire, no fear of spice. Just good food made with passion and pride.<br>
Located in Chihu Rock, Liyue Harbor, Sea of Clouds, Liyue.<br>`;
para.classList.add("about");

contents.appendChild(title);
contents.appendChild(para);
contents.classList.add("about-wrapper");

const display=document.querySelector("#content");
const swapAbout= () => {
    display.appendChild(contents);
}
export {contents, swapAbout};