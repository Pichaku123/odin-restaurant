import wanminImage from "./wanmin.png";

const contents=document.createElement("div");
contents.classList.add("home-wrapper");

const title=document.createElement("h1");

const logo=document.createElement("img");
logo.src=wanminImage;
logo.setAttribute("id", "logo");

title.innerHTML="Welcome to Wanmin restaurant!<br>";

const para=document.createElement("p");
para.classList.add("intro");
para.innerHTML="Step into Liyue’s most beloved food haven — home of fiery flavors, and hearty dishes! Whether you're a seasoned adventurer or a curious traveler, our kitchen is always open to serve you with something bold, spicy, and unforgettable!!<br>";

const slogan=document.createElement("p");
slogan.classList.add("slogan");
slogan.innerHTML="A new twist on an old classic, Wanmin restaurant welcomes you!<br>";

contents.appendChild(logo);
contents.appendChild(title);
contents.appendChild(para);
contents.appendChild(slogan);

const display=document.querySelector("#content");
const swapHome= () => {
    display.appendChild(contents);
}
export {contents, swapHome};