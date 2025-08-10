function RandomColor()
{
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}


let btn = document.querySelector("button");
btn.addEventListener("click" , function() {
    let heading = document.querySelector("#heading");
    let randColor = RandomColor();
    heading.innerText = randColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randColor;
});