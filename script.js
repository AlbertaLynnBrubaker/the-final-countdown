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
        const content1 = document.createElement("div");
        content1.setAttribute("class", "content")
        content1.textContent = "Bababooey!"
        document.body.append(content1);
    };
}