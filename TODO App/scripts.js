let input = document.querySelector("input");
let button = document.querySelector("button");
let unorder = document.querySelector("ul");

let button2 = document.querySelector("#btn2")

button.addEventListener("click" , function(){
    let task = input.value;

    let li = document.createElement("li");
    li.innerText = input.value;
    
    unorder.appendChild(li);
    input.value = "";
});

button2.addEventListener("click" , function(){
    unorder.remove();
});

