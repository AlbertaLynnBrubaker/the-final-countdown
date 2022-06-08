const h2 = document.createElement("h2");

h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const clickBorder = document.createElement("div");

clickBorder.setAttribute("id", "clickBorder");

document.querySelector("h2").appendChild(clickBorder);

const clickMe = document.createElement("div");

clickMe.setAttribute("id", "clickMe");

clickMe.textContent= "Click Me!";

//clickMe.addEventListener();

document.querySelector("div").appendChild(clickMe);