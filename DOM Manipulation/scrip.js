let input = document.createElement("input");

let body = document.querySelector("body");
body.append(input);

let button = document.createElement("button");
body.append(button);

button.innerText = "Click Me";

input.setAttribute("placeholder" , "username");
button.setAttribute("id" , "btn");

let btn = document.querySelector("#btn");
btn.classList.add("buttonStyle");

let heading1 = document.createElement("h1");
heading1.innerText = "DOM Practice";
heading1.style.color = "purple";
heading1.style.textDecoration = "underline";

body.append(heading1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";

body.append(p);




