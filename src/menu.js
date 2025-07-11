const contents = document.createElement("div");
contents.classList.add("menu-wrapper");

const title = document.createElement("h1");
title.textContent = "This is our menu!";

const grid = document.createElement("div");
grid.classList.add("menu-grid");

// Menu Items
const menuItems = [
  {
    name: "Jueyun Chili Chicken",
    desc: "Spicy chicken stir-fried with Jueyun Chilis from Mt. Aocang.",
  },
  {
    name: "Black-Back Perch Stew",
    desc: "A warming fish stew with herbs from Liyue.",
  },
  {
    name: "Crystal Shrimp Dumplings",
    desc: "Delicate dumplings that melt in your mouth.",
  },
  {
    name: "Golden Crab Fried Rice",
    desc: "Golden rice with crab meat and just a touch of spice.",
  },
];

menuItems.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.textContent = item.name;

  const itemDesc = document.createElement("p");
  itemDesc.textContent = item.desc;

  card.appendChild(itemName);
  card.appendChild(itemDesc);
  grid.appendChild(card);
});

contents.appendChild(title);
contents.appendChild(grid);

const display = document.querySelector("#content");
const swapMenu = () => {
  display.appendChild(contents);
};

export { contents, swapMenu };
