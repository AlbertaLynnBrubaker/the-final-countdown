<script src="./script.js"></script>
//const menuButtons = document.getElementsByClassName("menu-button");
//console.log(menuButtons);


//console.log(menuButtons);

/*const array = ["menu1", 2, "menu3"];

for(let item of array) {
    console.log(item);
}*/


function mouseEnter(a, b, c, d) {
    document.getElementById(a).style.backgroundColor = "#20518E";
    document.getElementById(b).style.color = "#C2DDFF";
    document.getElementById(c).src=d;
}

function mouseOut(a, b, c, d) {
    document.getElementById(a).style.backgroundColor = "";
    document.getElementById(b).style.color = "";
    document.getElementById(c).src=d;
}

function mouseClick(a, b, c, d) {
    document.getElementById(a).style.backgroundColor = "#FFDEF3";
    document.getElementById(b).style.color = "#20518E";
    document.getElementById(c).src=d;
    if (a === "menu-1") {
        document.getElementsByCLassName("content").style.display = "none";
        document.getElementById("content-about-me").style.display = "contents"; 
    };
}